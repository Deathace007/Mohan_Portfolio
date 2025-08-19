from supabase import create_client
import os
from dotenv import load_dotenv

#Initialize the evn
load_dotenv()

#Supabase project details
url = os.getenv("Supabase_URL")
key = os.getenv("Supabase_Key")
supabase = create_client(url, key)

response = supabase.table("Projects").select("*").execute()

print(response.data)


