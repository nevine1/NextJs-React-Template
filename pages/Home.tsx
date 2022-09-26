import React, {Fragment} from 'react'
import Header from '../components/header'
import About from '../components/about'
type Props = {}

export default function Home({}: Props) {
  return (
    <Fragment>
        <Header />
        <About />
    </Fragment>
  )
}