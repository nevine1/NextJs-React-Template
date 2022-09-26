import React, {Fragment, useState} from 'react'
import styles from '../../styles/Main.module.scss'
import Image from 'next/image'
import Image1 from '../../public/img/1.jpg'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BiMap} from 'react-icons/bi'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import OurProgramsContent from './OurProgramsContent';



export default function OurProgramsWrapper({}: Props) {
 
  return (
    <Fragment>
      
       <OurProgramsContent/>
      
    </Fragment>
  )
} 