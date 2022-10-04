import React, {Fragment} from 'react'
import styled from 'styled-components';
type Props = {}

const TabsWrapper = styled.div`
  display: flex; 
  gap: 30px;
  background-color: #f8f8f8;
  margin: 0;
`;
const TabSapn = styled.span`
  padding: 10px 0;
  font-weight: 400; 
  font-size: 16px;
  color: #3a3939;
`;
const Line = styled.div`
  background-color: #585656;
  height: 1px;
  width: 100%;
  `;
export default function Tabs({}: Props) {
  return (
    <Fragment>
        <TabsWrapper>
            <TabSapn>First Day</TabSapn>
            <TabSapn>Second Day</TabSapn>
            <TabSapn>Third Day</TabSapn>
        </TabsWrapper>
        <Line/>
    </Fragment>
  )
}