import React, { ReactElement, Fragment, useState } from 'react'
import Image from 'next/image'
import Img1 from '../public/img/3.jpg'
import {speakersData} from './speakersData'
import CreativeSpeakerComponent from './CreativeSpeakerComponent';
import styles from '../styles/Main.module.scss'
interface IState {
    people:{
        id: number;
        title: string;
        name: string;
        img: string;
    }[]
}

export default function creativeSpeakers({IState}: Props): ReactElement {
    const [people, setPeople] = useState<IState["people"]>(speakersData)
    return (
        <Fragment>
            <div className={styles.creativeSpeakers}>
                {
                    speakersData.map((person) => (
                        <CreativeSpeakerComponent {...person} key={person.id}/>
                      
                    ))
         
                }
                
              
            </div>
        </Fragment>
    )
}
