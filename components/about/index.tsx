import React, { ReactElement, Fragment } from 'react'
import AboutUsWrapper from './AboutUsWrapper';
import styles from '../../styles/Home.module.css'
interface Props {
    
}

export default function index({}: Props): ReactElement {
    return (
        <Fragment>
            <div className={styles.container}>
                <AboutUsWrapper/>
            </div>
        </Fragment>
    )
}
