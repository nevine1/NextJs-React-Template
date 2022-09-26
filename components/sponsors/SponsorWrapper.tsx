import React, {Fragment, useState} from 'react'
import {sponsorsData} from './sponsorsData'
import SponsorComponent from './SponsorComponent';
import styles from '../../styles/Main.module.scss'
type IState = {
    sponsors:{
        id: integer;
        img: string;
    }[]
}

export default function SponsorWrapper({IState}: Props) {
    const [sponsors, setSponsors] = useState<IState["sponsors"]>(sponsorsData);
  return (
    <Fragment>
        <div className={styles.sponsorWrapper}>
        {
            sponsors.map(sponsor =>(
                <SponsorComponent {...sponsor} key={sponsor.id} />
            ))
        }
        </div>
    </Fragment>
  )
}   