import Router, { AppProps } from "next/dist/next-server/lib/router/router"
import { SideBar } from "../components/SideBar"
import '../styles/global.css'
import '../styles/nprogress.css'
import NProgress from 'nprogress'


Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SideBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
