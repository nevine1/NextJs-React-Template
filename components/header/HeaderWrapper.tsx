import React, { ReactElement } from 'react'
import styles from '../../styles/Main.module.scss'
interface Props {
    
}

export default function HeaderWrapper({}: Props): ReactElement {
    return (
        <div className={styles.headerWrapper}>
            <h2>hellooooooooooooooo</h2>
            <h3>Web Developer</h3>
            <button className={`button is-primary  ${styles.headerBtn1}`}>Learn More</button>
            <button className={`button is-danger  ${styles.headerBtn2}`}>Register Now</button>
        </div>
    )
}
