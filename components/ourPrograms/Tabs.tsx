import React, {Fragment, useState} from 'react'
import styled from 'styled-components';
import styles from '../../styles/Main.module.scss'
import {TabsWrapper, TabSapn, Line} from './styles'
import {Tab1, Tab2, Tab3} from './TabsContent'
import Program from './Program';
type IState = {
    tab:{
      id: number; 
    name: string; 
    title: string;  
    img: string; 
    time: string; 
    roomNumber: string; 
    description:string;
    }[] 
}


export default function Tabs({IState}: Props) {
  const [tab, setTab] = useState<IState["tab"]>(Tab1); 
  
  const switchTab = (Tab) => {
    setTab(Tab);
  }
  return (
    <Fragment>
        <TabsWrapper className={styles.tabsWrapper}>
            <TabSapn onClick={() =>switchTab(Tab1)} className={styles.tabSapn}>First Day</TabSapn>
            <TabSapn onClick={() =>switchTab(Tab2)} className={styles.tabSapn}>Second Day</TabSapn>
            <TabSapn onClick={() =>switchTab(Tab3)} className={styles.tabSapn}>Third Day</TabSapn>
        </TabsWrapper>
        <Line className={styles.line}/>
        {
          tab === Tab2 ? 
          Tab2.map((item) => ( 
            <Program {...item} key={item.id} /> 
          ))
          : 
          tab === Tab3 ? 
          Tab3.map((item) => ( 
            <Program {...item} key={item.id} /> 
          ))
          : 
            Tab1.map((item) => ( 
            <Program {...item} key={item.id} /> 
          ))
        }
    </Fragment>
  )
}