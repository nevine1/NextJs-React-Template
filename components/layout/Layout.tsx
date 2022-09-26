import React , {Fragment} from 'react'
import Navbar from './Navbar'
type Props = {}

export default function Layout(props:any) {
  return (
    <Fragment>
        <Navbar/>
        {props.children}
    </Fragment>
  )
}
