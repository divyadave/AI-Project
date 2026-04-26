from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class JobRequest(BaseModel):
    resume: str
    job_description: str

@app.post("/analyze")
def analyze_job(data: JobRequest):
    return {
        "tailored_resume": f"Improved resume based on:{data.job_description[:50]}...",
        "cover_letter": f"Dear Hiring Manager, based on your job: {data.job_description[:50]}..."

    }

@app.get("/")
def read_root():
    return {"message": "Hello Divya, backend is running"}

@app.get("/greet/{name}")
def greet(name: str):
    return {"message": f"Hello {name}"}