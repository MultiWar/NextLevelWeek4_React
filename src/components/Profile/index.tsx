import { useContext } from 'react'
import { ChallengesContext } from '../../Contexts/ChallengesContext'
import styles from './Profile.module.css'

export const Profile = () => {
    const {level} = useContext(ChallengesContext)
    return (
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
    )
}