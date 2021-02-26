import { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../../Contexts/ChallengesContext'
import { CountdownContext } from '../../Contexts/CountdownContext'
import styles from './Countdown.module.css'

export const Countdown = () => {

    const { minutes, seconds, hasFinished, isCountdownRunning, startCountdown, resetCountdown } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            {hasFinished ? (
                <button disabled className={styles.countdownButton}>
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    {isCountdownRunning ? (
                        <button type='button' className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button type='button' onClick={startCountdown} className={styles.countdownButton}>
                            Iniciar ciclo
                        </button>
                    )}
                </>
            )}
        </div>
    )
}