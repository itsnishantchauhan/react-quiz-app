import questions from "./question.json"

const Result = ({score}) => {
  return (
    <div>
      <h1>Your Score is : {score}/{questions.length} </h1>
    </div>
  )
}

export default Result
