from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def read_root():
    return {"message": "Hello Divya, backend is running"}

@app.get("/greet/{name}")
def greet(name: str):
    return {"message": f"Hello {name}"}