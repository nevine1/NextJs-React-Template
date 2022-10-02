import React, { ReactElement , Fragment} from 'react'
import Image from 'next/image';
import styles from '../../styles/Main.module.scss'
interface Props {
    id: number;
    title: string;
    name: string;
    img: string;
}

export default function CreativeSpeakerComponent({img, id, title, name}: Props): ReactElement {
    return (
        <Fragment>
            <div className={styles.speakerContent}>
                <div>
                    <Image loader={()=>img}  width={150} height={150} src={img} alt={name}/>
                </div>
                <h2>{name}</h2>
                <p>{title}</p>
            </div>
        </Fragment>
    )
}
