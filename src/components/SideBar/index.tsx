import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from './SideBar.module.css'

export const SideBar = () => {
    const router = useRouter()

    const [isActive, setIsActive] = useState(router.pathname === '/' ? 'home' : 'leaderboard')
    const [homeSvg, setHomeSvg] = useState(router.pathname === '/' ? 'home_blue' : 'home')
    const [leaderboardSvg, setLeaderboardSvg] = useState(router.pathname === '/leaderboard' ? 'award_blue' : 'award')
    
    function goToHome() {
        router.push('/')
        setIsActive('home')
    }

    function goToLeaderboard() {
        router.push('/leaderboard')
        setIsActive('leaderboard')
    }

    useEffect(() => {
        if(isActive === 'home') {
            setHomeSvg('home_blue')
            setLeaderboardSvg('award')
        }
        if(isActive === 'leaderboard') {
            setHomeSvg('home')
            setLeaderboardSvg('award_blue')
        }
    }, [isActive])

    return (
        <div className={styles.sidebarContainer}>
            <img src='/icons/Logo.svg' alt='logo moveit' />
            <AnimateSharedLayout>
                <div className={styles.centeredDiv}>
                    <div onClick={() => goToHome()}>
                        {isActive === 'home' && (<motion.div className={styles.isActiveDiv} layoutId='isActiveDiv' />)}
                        <motion.img src={`/icons/${homeSvg}.svg`} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} />
                    </div>
                    <div onClick={() => goToLeaderboard()}>
                        {isActive === 'leaderboard' && (<motion.div className={styles.isActiveDiv} layoutId='isActiveDiv' />)}
                        <motion.img src={`/icons/${leaderboardSvg}.svg`} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} />
                    </div>
                </div>
            </AnimateSharedLayout>
        </div>
    )
}