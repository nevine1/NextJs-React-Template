import React, {Fragment} from 'react'
import styles from '../../styles/Main.module.scss'
import Image from 'next/image'
import ImageOne from '../../public/img/bg.jpg';
type Props = {}

export default function AboutUsWrapper({}: Props) {
  return (
    <Fragment>
        <div className={styles.aboutUsWrapper}>
            <div className={styles.aboutUsContent}>
              <h2 className="is-size-3 pb-2">Next.js - The ultimate way to build React apps</h2>
              <p className="is-size-6 p-2">React is an amazing framework that allows you to build front-ends that are unmatched in speed, functionality, and ease of use. Where React falls short though is its ability to 
                optimize for search engines. That’s where Next.js comes in.</p>
              <p className="is-size-6 p-2">React is an amazing framework that allows you to build front-ends that are unmatched in speed, functionality, and ease of use. Where React falls short </p>
            </div>
            <div className={styles.imgDiv}>
              <Image src={ImageOne} width={700} height={400} alt={'About us img'} />
            </div>
        </div>
    </Fragment>
  )
}