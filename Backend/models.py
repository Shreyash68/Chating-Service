from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime, timezone

class User(BaseModel):
    username: str
    email: str
    google_id: Optional[str] = None
    profile_pic : Optional[str] = None
    created_at: datetime = datetime.now(timezone.utc)

class Room(BaseModel):
    room_id: str
    name: str
    members: List[str] = []
    created_at: datetime = datetime.now(timezone.utc)

class Message(BaseModel):
    room_id: str
    sender_id: str
    content: str
    content_type: str = "text"
    timestamp: datetime = datetime.now(timezone.utc)
    status: str = "delivered"
