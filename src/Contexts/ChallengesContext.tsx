import {createContext, ReactNode, useEffect, useState} from 'react'
import Challenges from '../../challenges.json'
import Cookies from 'js-cookie'
import { LevelUpModal } from '../components/LevelUpModal'
import { AnimatePresence } from 'framer-motion'

type Challenge = {
    type: 'body' | 'eye',
    description: string,
    amount: number
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    completedChallenges: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode,
    level: number,
    currentExperience: number,
    completedChallenges: number
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export const ChallengesProvider = ({children, ...props}: ChallengesProviderProps) => {
    const [level, setLevel] = useState(props.level ?? 1)
    const [currentExperience, setCurrentExperience] = useState(props.currentExperience ?? 0)
    const [completedChallenges, setCompletedChallenges] = useState(props.completedChallenges ?? 0)
    const [activeChallenge, setActiveChallenge] = useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false)

    useEffect(() => {
        Notification.requestPermission()
    }, [])

    useEffect(() => {
        Cookies.set('level', String(level), {expires: 365})
        Cookies.set('currentExperience', String(currentExperience), {expires: 365})
        Cookies.set('completedChallenges', String(completedChallenges), {expires: 365})
    }, [level, currentExperience, completedChallenges])

    function levelUp() {
        setLevel(prev => prev + 1)
        setIsModalVisible(true)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * Challenges.length)
        const challenge = Challenges[randomChallengeIndex]
        setActiveChallenge(challenge)

        if(Notification.permission === 'granted') {
            new Notification('Novo desafio', {
                body: `Valendo ${challenge.amount} xp`
            })
            new Audio('/notification.mp3').play()
        }
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    function completeChallenge() {
        if(!activeChallenge) {
            return
        }

        const { amount } = activeChallenge

        let finalExperience = currentExperience + amount

        if(finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }

        setCurrentExperience(finalExperience)
        setActiveChallenge(null)
        setCompletedChallenges(prev => prev + 1)
    }

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    return (
        <ChallengesContext.Provider value={{
            level, 
            currentExperience, 
            completedChallenges,
            activeChallenge,
            experienceToNextLevel,
            levelUp, 
            startNewChallenge,
            resetChallenge,
            completeChallenge
        }}>
            {children}
            <AnimatePresence>
                {isModalVisible && <LevelUpModal closeModal={() => setIsModalVisible(false)} />}
            </AnimatePresence>
        </ChallengesContext.Provider>
    )
}