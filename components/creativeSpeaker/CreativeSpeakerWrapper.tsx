import React, {Fragment} from 'react'
import styles from '../../styles/Main.module.scss'
import CreativeSpeakers from './CreativeSpeakers';
import Slider from './Slider';
type Props = {}

export default function CreativeSpeakerWrapper({}: Props) {
  return (
    <Fragment >
        <div className={styles.speaker_wrapper}>
            <div>
              <h1>Creative <span>Speakers</span> </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, minus.</p>
            </div>
         
            <CreativeSpeakers />
            
        </div>
    </Fragment>
  )
}