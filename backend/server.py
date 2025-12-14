from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Blog Post Models
class BlogPost(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    content: str
    image_url: Optional[str] = None
    tags: List[str] = []
    slug: str
    date: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class BlogPostCreate(BaseModel):
    title: str
    content: str
    image_url: Optional[str] = None
    tags: List[str] = []

class BlogPostUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    image_url: Optional[str] = None
    tags: Optional[List[str]] = None

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Blog Post Routes
@api_router.post("/posts", response_model=BlogPost)
async def create_blog_post(post: BlogPostCreate):
    # Generate slug from title
    slug = post.title.lower().replace(' ', '-')
    slug = ''.join(c for c in slug if c.isalnum() or c == '-')
    
    post_obj = BlogPost(**post.model_dump(), slug=slug)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = post_obj.model_dump()
    doc['date'] = doc['date'].isoformat()
    doc['created_at'] = doc['created_at'].isoformat()
    doc['updated_at'] = doc['updated_at'].isoformat()
    
    await db.blog_posts.insert_one(doc)
    return post_obj

@api_router.get("/posts", response_model=List[BlogPost])
async def get_blog_posts():
    posts = await db.blog_posts.find({}, {"_id": 0}).sort("date", -1).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for post in posts:
        if isinstance(post['date'], str):
            post['date'] = datetime.fromisoformat(post['date'])
        if isinstance(post['created_at'], str):
            post['created_at'] = datetime.fromisoformat(post['created_at'])
        if isinstance(post['updated_at'], str):
            post['updated_at'] = datetime.fromisoformat(post['updated_at'])
    
    return posts

@api_router.get("/posts/{post_id}", response_model=BlogPost)
async def get_blog_post(post_id: str):
    post = await db.blog_posts.find_one({"id": post_id}, {"_id": 0})
    
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    
    # Convert ISO string timestamps back to datetime objects
    if isinstance(post['date'], str):
        post['date'] = datetime.fromisoformat(post['date'])
    if isinstance(post['created_at'], str):
        post['created_at'] = datetime.fromisoformat(post['created_at'])
    if isinstance(post['updated_at'], str):
        post['updated_at'] = datetime.fromisoformat(post['updated_at'])
    
    return post

@api_router.get("/posts/slug/{slug}", response_model=BlogPost)
async def get_blog_post_by_slug(slug: str):
    post = await db.blog_posts.find_one({"slug": slug}, {"_id": 0})
    
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    
    # Convert ISO string timestamps back to datetime objects
    if isinstance(post['date'], str):
        post['date'] = datetime.fromisoformat(post['date'])
    if isinstance(post['created_at'], str):
        post['created_at'] = datetime.fromisoformat(post['created_at'])
    if isinstance(post['updated_at'], str):
        post['updated_at'] = datetime.fromisoformat(post['updated_at'])
    
    return post

@api_router.put("/posts/{post_id}", response_model=BlogPost)
async def update_blog_post(post_id: str, post_update: BlogPostUpdate):
    existing_post = await db.blog_posts.find_one({"id": post_id}, {"_id": 0})
    
    if not existing_post:
        raise HTTPException(status_code=404, detail="Post not found")
    
    # Update only provided fields
    update_data = post_update.model_dump(exclude_unset=True)
    
    # Update slug if title is changed
    if 'title' in update_data:
        slug = update_data['title'].lower().replace(' ', '-')
        slug = ''.join(c for c in slug if c.isalnum() or c == '-')
        update_data['slug'] = slug
    
    update_data['updated_at'] = datetime.now(timezone.utc).isoformat()
    
    await db.blog_posts.update_one(
        {"id": post_id},
        {"$set": update_data}
    )
    
    # Get updated post
    updated_post = await db.blog_posts.find_one({"id": post_id}, {"_id": 0})
    
    # Convert ISO string timestamps back to datetime objects
    if isinstance(updated_post['date'], str):
        updated_post['date'] = datetime.fromisoformat(updated_post['date'])
    if isinstance(updated_post['created_at'], str):
        updated_post['created_at'] = datetime.fromisoformat(updated_post['created_at'])
    if isinstance(updated_post['updated_at'], str):
        updated_post['updated_at'] = datetime.fromisoformat(updated_post['updated_at'])
    
    return updated_post

@api_router.delete("/posts/{post_id}")
async def delete_blog_post(post_id: str):
    result = await db.blog_posts.delete_one({"id": post_id})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Post not found")
    
    return {"message": "Post deleted successfully"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()