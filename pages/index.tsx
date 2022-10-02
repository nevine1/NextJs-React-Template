import type { NextPage } from 'next'
import {Fragment} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import About from '../components/about'
import OverviewSection from '../components/overView/OverViewSection'
import CreativeSpeakerWrapper from '../components/creativeSpeaker/CreativeSpeakerWrapper';

const Home: NextPage = () => {
  return (
    <Fragment>  
      <Header />
      <About />
      <OverviewSection />
      <CreativeSpeakerWrapper/>
    </Fragment>
    
  )
}

export default Home
