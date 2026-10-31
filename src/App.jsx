import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'
import Question from './components/Question'
import Result from './components/Result'

function App() {
  const [isOver, setIsOver] = useState(false)
  const [score, setScore] = useState(0)

  return (
    <>
      
      {isOver? (<Result score={score} />) : (<><Timer setIsOver={setIsOver}/> <Question setIsOver={setIsOver} setScore={setScore}/>  </>) }
      
    </>
  )
}

export default App
