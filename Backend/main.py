from ast import Try

from fastapi import FastAPI,WebSocket,WebSocketDisconnect,Request, HTTPException
from fastapi.responses import RedirectResponse, JSONResponse
from google.oauth2 import id_token
from google.auth.transport import requests

import httpx
from db import db
from settings.config import settings
import jwt
from datetime import datetime, timezone, timedelta


app = FastAPI()

rooms = {}
users = []




users = db["users"]

def create_app_token(user_id: str):
    expire = datetime.now(timezone.utc) + timedelta(hours=1)
    payload = {"sub": user_id, "exp": expire}
    return jwt.encode(payload, settings.SECRET_KEY, algorithm=settings.ALGORITHM)


# --- Step 1: Redirect user to Google ---
@app.get("/auth/login")
async def google_login():
    google_auth_url = (
        "https://accounts.google.com/o/oauth2/v2/auth"
        f"?client_id={settings.GOOGLE_CLIENT_ID}"
        f"&redirect_uri={settings.REDIRECT_URI}"
        "&response_type=code"
        "&scope=openid%20email%20profile"
    )
    return RedirectResponse(google_auth_url)


# --- Step 2: Callback from Google ---
@app.get("/auth/callback")
async def google_callback(request: Request):
    code = request.query_params.get("code")
    if not code:
        raise HTTPException(status_code=400, detail="No code in callback")

    # Step 3: Exchange code for tokens
    token_url = "https://oauth2.googleapis.com/token"
    async with httpx.AsyncClient() as client:
        resp = await client.post(token_url, data={
            "code": code,
            "client_id": settings.GOOGLE_CLIENT_ID,
            "client_secret": settings.GOOGLE_CLIENT_SECRET,
            "redirect_uri": settings.REDIRECT_URI,
            "grant_type": "authorization_code",
        })
        token_data = resp.json()

    id_token_str = token_data.get("id_token")
    if not id_token_str:
        raise HTTPException(status_code=400, detail="No ID token returned")

    # Step 4: Verify ID Token with google-auth
    try:
        idinfo = id_token.verify_oauth2_token(
            id_token_str,
            requests.Request(),
            settings.GOOGLE_CLIENT_ID
        )
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid Google token")

    # Step 5: Upsert user in Mongo
    google_id = idinfo["sub"]
    email = idinfo.get("email")
    name = idinfo.get("name")

    user = await users.find_one({"google_id": google_id})
    if not user:
        new_user = {
            "google_id": google_id,
            "email": email,
            "name": name,
            "created_at": datetime.now(timezone.utc)
        }
        result = await users.insert_one(new_user)
        user_id = str(result.inserted_id)
    else:
        user_id = str(user["_id"])

    # Step 6: Create session JWT
    app_token = create_app_token(user_id)
    response = RedirectResponse(url="/welcome")  # frontend page
    response.set_cookie(key="token", value=app_token, httponly=True)

    return response



@app.websocket("/ws/{room_id}")
async def accept_connection(ws : WebSocket, room_id):
    await ws.accept()

    if room_id not in rooms:
        rooms[room_id] = [] 

    rooms[room_id].append(ws)
    
    
    try:
        while True:
            payload = await ws.receive_text()
            for user in rooms[room_id] :
                if(user != ws ):
                    await user.send_text(payload)
            print(payload)
            print(rooms)
    except WebSocketDisconnect:
        print(f"User Disconnected from {room_id} {ws}")
        rooms[room_id].remove(ws)
        if not rooms[room_id]:
            print(f"{room_id} : Room deleted as no users were present")
            rooms.pop(room_id)
     