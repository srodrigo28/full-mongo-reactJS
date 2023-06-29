import { Ui } from './Ui'
import styles from './music.module.css'

export function Music() {
    return (
        <div>
            <header className={styles['header']}>
                <h1>
                    App<span>Music</span>
                </h1>
            </header>
            <Ui />
        </div>
    )
}