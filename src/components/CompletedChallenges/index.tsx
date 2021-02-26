import { useContext } from 'react'
import { ChallengesContext } from '../../Contexts/ChallengesContext'
import styles from './CompletedChallanges.module.css'

export const CompletedChallenges = () => {
    const {completedChallenges} = useContext(ChallengesContext)
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{completedChallenges}</span>
        </div>
    )
}