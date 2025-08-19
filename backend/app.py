from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from supabase import create_client
import os
from dotenv import load_dotenv

#Create FastAPI application
app = FastAPI()

origins = [
    "http://localhost:3000",   # React (CRA)
    "http://127.0.0.1:3000",
    "http://localhost:5173",   # React (Vite)
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,          # 👈 only allow these origins
    allow_credentials=True,
    allow_methods=["*"],            # 👈 allow all HTTP methods
    allow_headers=["*"],            # 👈 allow all headers
)


#Initialize the evn
load_dotenv()

#Supabase project details
url = os.getenv("Supabase_URL")
key = os.getenv("Supabase_Key")
supabase = create_client(url, key)

@app.get("/projects")
def project_data():
    response = supabase.table("Projects").select("*").execute()
    return response.data


