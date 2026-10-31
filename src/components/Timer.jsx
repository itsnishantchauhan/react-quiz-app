import React, { useEffect, useState } from 'react'

const Timer = ({ setIsOver }) => {
    const [leftTime, setLeftTime] = useState(20);
    const [displayTime, setDisplayTime] = useState(" ")

    useEffect(() => {

        let timeIntervalId = setInterval(() => {

            setLeftTime((prev) => {
                if (prev <= 0) {
                    clearInterval(timeIntervalId);
                    return 0
                }

                return prev - 1
            })

        }, 1000)

        return () => {
            clearInterval(timeIntervalId)
        }

    }, [])

    useEffect(() => {
        if (leftTime === 0) {
            setIsOver(true)
        }

        let x = (`${Math.floor(leftTime / 60).toString().padStart(2, 0)} : ${(leftTime % 60).toString().padStart(2, 0)}`)
        setDisplayTime(x)

    }, [leftTime])

    return (
        <div>
            <h1>Timer: {displayTime}</h1>

        </div>
    )
}

export default Timer
