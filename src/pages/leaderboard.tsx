import { GetServerSideProps } from 'next'
import { PositionInLeaderboard } from '../components/PositionInLeaderboard'
import { ChallengesProvider } from '../Contexts/ChallengesContext'
import styles from '../styles/Leaderboard.module.css'

interface LeaderboardProps {
    level: number,
    currentExperience: number,
    completedChallenges: number
}

export default function Leaderboard(props: LeaderboardProps) {
    return (
        <ChallengesProvider
            level={props.level}
            currentExperience={props.currentExperience}
            completedChallenges={props.completedChallenges}
        >
            <div className={styles.container}>
                <header>
                    <h1>Leaderboard</h1>
                    <div className={styles.titles}>
                        <div>
                            <span>POSIÇÃO</span>
                            <span>USUÁRIO</span>
                        </div>
                        <div>
                            <span>DESAFIOS</span>
                            <span>EXPERIÊNCIA</span>
                        </div>
                    </div>
                </header>
                <main className={styles.main}>
                    <PositionInLeaderboard />
                </main>
            </div>
        </ChallengesProvider>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const {level, currentExperience, completedChallenges} = ctx.req.cookies
  
    return {
      props: {
        level: Number(level),
        currentExperience: Number(currentExperience),
        completedChallenges: Number(completedChallenges)
      }
    }
  }
  