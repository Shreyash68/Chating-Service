from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId
from settings.config import settings



client = AsyncIOMotorClient(settings.DATABASE_URL) 

db=client["Chat_Application"]


