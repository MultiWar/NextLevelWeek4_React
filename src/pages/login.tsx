import { providers, signIn, getSession } from 'next-auth/client';
import styles from '../styles/Login.module.css'

export default function SignIn({ providers }) {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginImage}><img src="/Simbolo.svg" alt=""/></div>
            <div className={styles.loginBox}>
                <img src='/logo_login.svg' />
                <h1>Bem-vindo</h1>
                <img src='/Git.svg' />
                <button>Logar com GitHub</button>
            </div>
        </div>
    )
}