import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import { ChallengesContext } from '../../Contexts/ChallengesContext'
import styles from './LevelUpModal.module.css'

interface LevelUpModalProps {
    closeModal: () => void
}

const overlayVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5
        }
    }
}

const modalContainerVariants = {
    initial: {
        bottom: '-50%',
        opacity: 0
    },
    animate: {
        bottom: 0,
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.5
        }
    },
    exit: {
        bottom: '-50%',
        opacity: 0,
        transition: {
            duration: 0.5
        }
    }
}

export const LevelUpModal = ({closeModal}: LevelUpModalProps) => {
    const {level} = useContext(ChallengesContext)
    return (
        <motion.div key='overlay' className={styles.overlay} variants={overlayVariants} initial='initial' animate='animate' exit='exit'>
            <motion.div key='modal' className={styles.modalContainer} variants={modalContainerVariants} initial='initial' animate='animate' exit='exit'>
                <header>{level}</header>
                <strong>Parabéns!</strong>
                <p>Você alcançou um novo level!</p>
                <button type='button' onClick={closeModal}>
                    <img src='/icons/close.svg' alt='fechar modal' />
                </button>
            </motion.div>
        </motion.div>
    )
}