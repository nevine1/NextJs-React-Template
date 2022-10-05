import React, {Fragment} from 'react'
import styles from '../../styles/Main.module.scss'
import Image from 'next/image'
import Image1 from '../../public/img/1.jpg'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BiMap} from 'react-icons/bi'
import {faClock} from '@fortawesome/free-solid-svg-icons';
import OurProgramsWrapper from './OurProgramsWrapper';

interface Props {
    id: number; 
    roomNumber: number;
    name: string;
    title: string;
    time: string;
    img: string;
    description: string;
}

export default function Program({id, roomNumber, name, title, time, img, description}: Props): ReactElement {
    return (
        <Fragment>
            <div className={styles.programsMainContent}>
                <div className={styles.programImgDiv}>
                    <Image src={img} width={180} height={180} alt={name} className={styles.programImage}/>
                </div>
                <div className={styles.programsContent}>
                    <div className={styles.iconWrapper}>
                        <span>
                            <AiOutlineClockCircle className={styles.programTime}/> {time}
                        </span>
                        <span>
                            <BiMap/>Room {roomNumber}
                        </span>
                    </div>
                    <h2 className={styles.programHeading}>{title} </h2>
                    <span className={styles.programName}>{name}</span>
                    <p className={styles.programDesc}>{description}</p>
                </div>
            </div>
        </Fragment>
    )
}
