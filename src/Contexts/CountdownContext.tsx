import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from './ChallengesContext'

interface CountdownContextData {
    minutes: number,
    seconds: number,
    hasFinished: boolean,
    isCountdownRunning: boolean,
    startCountdown: () => void,
    resetCountdown: () => void,
}

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProider({children}: {children: ReactNode}) {
    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime] = useState(.05 * 60)
    const [isCountdownRunning, setIsCountdownRunning] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    let countdownTimeout: NodeJS.Timeout

    const startCountdown = () => {
        setIsCountdownRunning(true)
    }

    const resetCountdown = () => {
        clearTimeout(countdownTimeout)
        setIsCountdownRunning(false)
        setTime(0.05 * 60)
        setHasFinished(false)
    }

    useEffect(() => {
        if(isCountdownRunning && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(prev => prev - 1)
            }, 1000)
        }
        else if(isCountdownRunning && time === 0) {
            setHasFinished(true)
            setIsCountdownRunning(false)
            startNewChallenge()
        }
    }, [isCountdownRunning, time])
    
    return (
        <CountdownContext.Provider
            value={{
                minutes,
                seconds,
                hasFinished,
                isCountdownRunning,
                startCountdown,
                resetCountdown,
            }}
        >
            {children}
        </CountdownContext.Provider>
    )
}