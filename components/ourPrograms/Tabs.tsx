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
      color: string;
      }[] 
}


export default function Tabs({IState}: Props) {
  const [tab, setTab] = useState<IState["tab"]>(Tab1); 
  const [color, setColor] = useState<string>('red');
  const switchTab = (tab) => {
    setTab(tab);
  }
  return (
    <Fragment>
        <TabsWrapper className={styles.tabsWrapper}>
            <TabSapn onClick={() =>switchTab(Tab1)} className={styles.tabSapn}
              style={{color: tab === Tab1 ? '#f2545f' : '',fontWeight: tab === Tab1 ? 'bold' : ''}}
              >First Day</TabSapn>

            <TabSapn onClick={() =>switchTab(Tab2)} className={styles.tabSapn}
              style={{color: tab === Tab2 ? '#f2545f' : '', fontWeight: tab === Tab2 ? 'bold' : ''}}
              >Second Day</TabSapn>

            <TabSapn onClick={() =>switchTab(Tab3)} className={styles.tabSapn}
              style={{color: tab === Tab3 ? '#f2545f' : '', fontWeight: tab === Tab3 ? 'bold' : ''}}
              >Third Day</TabSapn>

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