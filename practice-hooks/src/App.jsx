import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ChatApp from './ChatApp'
import Content1 from './Content1'
import Content2 from './Content2'

function App() {
  const [show, setShow] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/content1" element={<Content1/>} />
        <Route path="/content2" element={<Content2/>} />
        <Route path="/chatapp" element={<ChatApp/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
