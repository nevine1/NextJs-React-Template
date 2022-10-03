import React, {Fragment, useState} from 'react'
import styles from '../../styles/Main.module.scss'
/* import Image from 'next/image'
import Image1 from '../../public/img/1.jpg'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BiMap} from 'react-icons/bi'
import {faClock} from '@fortawesome/free-solid-svg-icons'; */
import Program from './Program';
import {OurProgramData} from './OurProgramData'
import Tabs from './Tabs'
type IState = {
    programs:{
      id: number; 
      roomNumber: number;
      name: string;
      title: string;
      date: string;
      img: string;
      description: string;
    }
  }
export default function OurProgramsContent({IState}: Props) {
    const[programs, setPrograms] = useState<IState["programs"]>(OurProgramData);
    console.log(programs)
  return (
    <Fragment>
      
      <div >
        <div>
          <h1>programs </h1>
        </div>
        
      {
              programs.map(program =>(
                <Program {...program} key={program.id}  />
              ))
          }
      </div>
  
    </Fragment>
  )
} 