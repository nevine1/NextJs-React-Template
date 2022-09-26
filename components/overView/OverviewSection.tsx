import React, { ReactElement, Fragment } from 'react'
import OverView from './OverView';
import styles from '../../styles/Main.module.scss';

import {faUserGroup} from '@fortawesome/free-solid-svg-icons'
type Props = {
  title: string;
  content: string;
  icon: object;
}

export default function OverviewSection({}: Props): ReactElement {
    return (
        <Fragment>
            <div className={styles.overall}>
                <OverView 
                icon={faUserGroup}
                title={`First Heading`} content={`wait  - compiling /speakers...
                    event - compiled client and server successfully in 131 ms (246 modules)
                    wait  - compiling /contact...
                    event - compiled client and server successfully in 174 ms (249 modules)
                    wait  - compiling /about...
                    `} />
                <OverView 
                    icon={faUserGroup}
                    title={`First Heading`} content={`wait  - compiling /speakers...
                    event - compiled client and server successfully in 131 ms (246 modules)
                    wait  - compiling /contact...
                    event - compiled client and server successfully in 174 ms (249 modules)
                    wait  - compiling /about...
                    `} />
                <OverView 
                icon={faUserGroup}
                title={`First Heading`} content={`wait  - compiling /speakers...
                    event - compiled client and server successfully in 131 ms (246 modules)
                    wait  - compiling /contact...
                    event - compiled client and server successfully in 174 ms (249 modules)
                    wait  - compiling /about...
                    `} />
            </div>
        </Fragment>
    )
}
