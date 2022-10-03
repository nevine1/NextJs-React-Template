import React, {Fragment, useState} from 'react'
import styles from '../../styles/Main.module.scss'
import Image from 'next/image'
import Image1 from '../../public/img/1.jpg'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BiMap} from 'react-icons/bi'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import OurProgramsContent from './OurProgramsContent';
import Tabs from './Tabs'

export default function OurProgramsWrapper({}: Props) {
 
  return (
    <Fragment>
      <div className={styles.programsWrapper}>
        <div>
          <h1 className={styles.programsTitle}>Our <span >Programs</span></h1>
          <p className={styles.programsText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, aut.</p>
        </div>
        <div className={styles.tabs}>
          <Tabs/>
        </div>
        {/* <OurProgramsContent/> */}
        
      </div>
       
      
    </Fragment>
  )
} 