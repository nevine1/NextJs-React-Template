import React, { ReactElement, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/Main.module.scss'
interface Props {
   title: string; 
   content: string;
   icon: object;
}

export default function OverView({content, title, icon}: Props): ReactElement {
    return (
        <Fragment>
            <div className={styles.overview}>
                <div className={styles.iconContainer}>
                    <h1>This is overviewo section</h1>
                    <FontAwesomeIcon icon={icon} className={styles.icon}/>
                </div>
                <div>   
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
            </div>
        </Fragment>
    )
}
