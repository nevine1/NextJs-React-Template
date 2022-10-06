import React, { ReactElement, Fragment } from 'react'
import styles from '../../styles/Main.module.scss';
import RegisterForm from './RegisterForm';

interface Props {
    
}

export default function RegisterFormContent({}: Props): ReactElement {
    return (
        <Fragment>
            <div className={styles.formWrapper}>
                <div className={styles.formText}>
                    <h1 className={styles.formTitle}>Register <span className={styles.formSpan}>Form </span></h1>
                    <p className={styles.formText1}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ratione vero repellat sed minima dignissimos aliquid, ipsa laboriosam tenetur natus.</p>
                    <p className={styles.formText2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde natus debitis non molestias voluptatem cupiditate sapiente, delectus possimus deserunt, ab perspiciatis culpa nemo cumque aperiam maiores beatae hic minus illum?</p>
                </div>
                <div className={styles.regsiterForm}>
                    <RegisterForm/>
                </div>
            </div> 
        </Fragment>
    )
}
