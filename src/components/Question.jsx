import { useState } from "react"
import questions from "./question.json"

const Question = ({ setIsOver, setScore }) => {

    const [curIndx, setCurIndx] = useState(0)

    return (
        <div>
            <h2>{questions[curIndx].question}</h2>

            <div className="flex flex-col gap-2 justify-center items-center ">

                {
                    questions[curIndx].options.map((item) => {
                        return <button

                            key={item}
                            className="bg-red-700 text-white px-4 py-2 rounded-md m-2 active:border-2"
                            onClick={() => {

                                if (item === questions[curIndx].answer) {
                                    setScore((prevScr) => prevScr + 1)
                                }

                                if (curIndx < questions.length - 1) {
                                    setCurIndx((prev) => prev + 1)
                                } else { setIsOver(true) }

                            }}

                        >{item}</button>
                    })
                }
            </div>
        </div>
    )
}

export default Question