import React, { ReactElement, Fragment, useState } from 'react'
import Image from 'next/image'
import Img1 from '../public/img/3.jpg'
import {speakersData} from './speakersData'
import CreativeSpeakerComponent from './CreativeSpeakerComponent';
import styles from '../../styles/Main.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
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
                <Swiper 
                    spaceBetween={25}
                    slidesPerView={5}
                    autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                    >
                {
                    speakersData.map((person) => (
                        <SwiperSlide key={person.id}>
                            <CreativeSpeakerComponent {...person} />
                        </SwiperSlide>
                      
                    ))
         
                }
                
                </Swiper> 
            </div>
        </Fragment>
    )
}
