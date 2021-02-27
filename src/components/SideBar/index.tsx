import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from './SideBar.module.css'

export const SideBar = () => {
    const router = useRouter()

    const [isActive, setIsActive] = useState(router.pathname !== '/' ? router.pathname : 'home')
    const [homeSvg, setHomeSvg] = useState('home_blue')
    const [leaderboardSvg, setLeaderboardSvg] = useState('award')
    
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
                        <img src={`/icons/${homeSvg}.svg`} />
                    </div>
                    <div onClick={() => goToLeaderboard()}>
                        {isActive === 'leaderboard' && (<motion.div className={styles.isActiveDiv} layoutId='isActiveDiv' />)}
                        <img src={`/icons/${leaderboardSvg}.svg`} />
                    </div>
                </div>
            </AnimateSharedLayout>
        </div>
    )
}