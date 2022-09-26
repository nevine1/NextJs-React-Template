import React, {Fragment} from 'react'
import CreativeSpeakerWrapper from '../components/CreativeSpeakerWrapper';
import OurProgramsWrapper from '../components/ourPrograms/OurProgramsWrapper';
import SponsorsWrapper from '../components/sponsors/SponsorWrapper'
import AboutUsWrapper from '../components/about/AboutUsWrapper';

export default function about(props: any) {
  return (
    <Fragment>
      <AboutUsWrapper />
      <CreativeSpeakerWrapper/>
      <OurProgramsWrapper/>
      <SponsorsWrapper />
    </Fragment>
  )
}