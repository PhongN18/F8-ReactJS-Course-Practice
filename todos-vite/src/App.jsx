import { useState } from 'react';
import './App.css';

function App() {
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState([])

  const handleSubmit = () => {
    setJobs(prev => [...prev, job])
    setJob('')
  }
  
  return (
    <div style={{ padding: 32 }}>
      <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((jb, index) =>
          <li key={index}>{jb}</li>
        )}
      </ul>
    </div>
  )
}

export default App
