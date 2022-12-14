import React, {Fragment, useState} from 'react'
import {useRouter} from 'next/router';
import Link from 'next/link'
//import styles from '../../styles/Home.module.css'
import styles from '../../styles/Main.module.scss';
import Head from 'next/head'
import {Links } from './Links'; 

type Props = {}

export default function Navbar({}: Props) {
    const router = useRouter(); 
    console.log(Links);
    const [activeClass, setActiveClass] = useState(false);
  return (
    <Fragment>
        <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <nav className={`has-background-primary ${styles.navbar}` } role="navigation" aria-label="main navigation">
            <ul>
                {
                  Links.map((a, index)=>(
                    <li key={index} >
                      <Link href={a.navLink} >{a.navText}</Link>
                    </li>
                  ))
                  }
            </ul>
        </nav>
        
    </Fragment>
  )
}