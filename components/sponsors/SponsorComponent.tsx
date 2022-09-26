import React, { ReactElement, Fragment } from 'react'
import Image from 'next/image';
interface Props {
    id: integer; 
    img: string;
    alt: string;
}

export default function SponsorComponent({img, id, alt}: Props) {
    return (
        <Fragment>
            <div>
                <Image src={img} loader={() =>img} width={100} height={80} alt={alt} />
            </div>
        </Fragment>
    )
}
