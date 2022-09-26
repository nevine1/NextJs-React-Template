import React, {Fragment} from 'react'
import styles from '../styles/Main.module.scss'
import CreativeSpeakers from './CreativeSpeakers';
type Props = {}

export default function CreativeSpeakerWrapper({}: Props) {
  return (
    <Fragment >
        <div className={styles.speaker_wrapper}>
            <h1>Hello Speaker Wrapperrrrrrrrrrrrrrr</h1>
            <CreativeSpeakers />
        </div>
    </Fragment>
  )
}