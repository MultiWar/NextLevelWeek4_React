import { AppProps } from "next/dist/next-server/lib/router/router"
import { ChallengesProvider } from "../Contexts/ChallengesContext"
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
