import { useContext } from 'react'
import { ChallengesContext } from '../../Contexts/ChallengesContext'
import styles from './ExperienceBar.module.css'

export const ExperienceBar = () => {
    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext)
    const percentToNextLevel = Math.floor(currentExperience * 100) / experienceToNextLevel
    return (
        <header  className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: `${percentToNextLevel}%`}} />
                <span className={styles.currentExperience} style={{left: `${percentToNextLevel}%`}}>{currentExperience} xp</span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}