import React, {Fragment} from 'react'
import styled from 'styled-components';
type Props = {}

const TabsWrapper = styled.div`
  display: flex; 
  gap: 30px;
  background-color: pink;
  margin: 0;

`;
const TabSapn = styled.span`
  padding: 20px 10px;
  font-weight: 400; 
  font-size: 16px;
  color: #6b6969;
`;
export default function Tabs({}: Props) {
  return (
    <Fragment>
        <TabsWrapper>
            <TabSapn>First Day</TabSapn>
            <TabSapn>Second Day</TabSapn>
            <TabSapn>Third Day</TabSapn>
          
        </TabsWrapper>
    </Fragment>
  )
}