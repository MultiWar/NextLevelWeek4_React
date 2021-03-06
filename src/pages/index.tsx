import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ChallengeBox } from '../components/ChallengeBox'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { ChallengesProvider } from '../Contexts/ChallengesContext'
import { CountdownProider } from '../Contexts/CountdownContext'
import styles from '../styles/Home.module.css'

interface HomeProps {
  level: number,
  currentExperience: number,
  completedChallenges: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      completedChallenges={props.completedChallenges}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | MoveIt</title>
        </Head>
        <ExperienceBar />
        <CountdownProider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const session = await getSession(ctx)
  
  // if (!session) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: '/login'
  //     }
  //   }
  // }

  const {level, currentExperience, completedChallenges} = ctx.req.cookies
  
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      completedChallenges: Number(completedChallenges),
      // session
    }
  }
}
