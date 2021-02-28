import { useContext } from 'react'
import { ChallengesContext } from '../../Contexts/ChallengesContext'
import styles from './PositionInLeaderboard.module.css'

export const PositionInLeaderboard = () => {
    const { level, currentExperience, completedChallenges } = useContext(ChallengesContext)
    return (
        <div className={styles.personContainer}>
            <div>1</div>
            <div className={styles.playerInformations}>
                {/* <div> */}
                    <div className={styles.profileContainer}>
                        <img src='https://github.com/multiwar.png' alt='eu' />
                        <div>
                            <strong>Nícolas Trevisol</strong>
                            <p>
                                <img src='icons/level.svg' />
                                Level {level}
                            </p>
                        </div>
                    </div>
                {/* </div> */}
                {/* <div> */}
                    {/* <div> */}
                        <p className={styles.challenges}><span>{completedChallenges}</span> completos </p>
                    {/* </div> */}
                    {/* <div> */}
                        <p className={styles.experience}><span>{currentExperience}</span> xp </p>
                    {/* </div> */}
                {/* </div> */}
            </div>
        </div>
    )
}