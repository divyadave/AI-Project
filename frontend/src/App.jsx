import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [message, setMessage]= useState("")
 const [name, setName] = useState("")
 const [resume, setResume]= useState("")
 const [jobDesc, setJobDesc] = useState("")
 const [result, setResult] = useState(null)

 const callAPI = async () => {
  try
  {
  const res = await fetch("http://127.0.0.1:8001/")
  const data = await res.json();
  setMessage(data.message);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
 }
 const handleSubmit = async() => {
  try {
  const res = await fetch("http://127.0.0.1:8001/analyze", {
    method: "POST",
    headers: {
      "Content-Type":  "application/json"
    },
    body: JSON.stringify({
      resume: resume,
      job_description: jobDesc
    })
  });
  const data = await res.json()
  setResult(data)
}
catch(error) {
  console.error("Error", error)
}
 }

  return (
   <div style={{ padding: "20px" }}>
      <h1>AI Job Assistant</h1>

      <textarea
        placeholder="Paste your resume"
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        rows={5}
        cols={50}
      />

      <br /><br />

      <textarea
        placeholder="Paste job description"
        value={jobDesc}
        onChange={(e) => setJobDesc(e.target.value)}
        rows={5}
        cols={50}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Analyze
      </button>

      {result && (
        <div>
          <h2>Tailored Resume:</h2>
          <p>{result.tailored_resume}</p>

          <h2>Cover Letter:</h2>
          <p>{result.cover_letter}</p>
        </div>
      )}
    </div>
  )
}

export default App
