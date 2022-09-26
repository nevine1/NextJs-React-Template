import React, {Fragment, useState} from 'react'
import styles from '../../styles/Main.module.scss'
/* import Image from 'next/image'
import Image1 from '../../public/img/1.jpg'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BiMap} from 'react-icons/bi'
import {faClock} from '@fortawesome/free-solid-svg-icons'; */
import OurProgram from './OurProgram';
import {OurProgramData} from './OurProgramData'
type IState = {
    programs:{
      id: number; 
      roomNumber: number;
      name: string;
      title: string;
      date: string;
      img: string;
      description: string;
    }[]
  }
export default function OurProgramsContent({IState}: Props) {
    const[programs, setPrograms] = useState<IState["programs"]>(OurProgramData);
  return (
    <Fragment>
      
          {
              programs.map(program =>(
                <OurProgram {...program} key={program.id}  />
              ))
          }
        
      
    </Fragment>
  )
} 