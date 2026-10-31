import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'
import Question from './components/Question'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Timer/>
      <Question/>
    </>
  )
}

export default App
