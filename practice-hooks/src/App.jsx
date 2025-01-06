import { useState } from 'react'
import './App.css'
import Content from './Content'

function App() {
  const [show, setShow] = useState(false)

  return (
    <Content />
  )
}

export default App
