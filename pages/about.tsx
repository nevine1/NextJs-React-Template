import React, {Fragment} from 'react'
import CreativeSpeakerWrapper from '../components/creativeSpeaker/CreativeSpeakerWrapper';
import OurProgramsWrapper from '../components/ourPrograms/OurProgramsWrapper';
import SponsorsWrapper from '../components/sponsors/SponsorWrapper'
import AboutUsWrapper from '../components/about/AboutUsWrapper';
import OverviewSection from '../components/overView/OverviewSection';

export default function about(props: any) {
  return (
    <Fragment>
      <AboutUsWrapper />
      <CreativeSpeakerWrapper/>
      <OurProgramsWrapper/>
      <SponsorsWrapper />
      <OverviewSection/>
    </Fragment>
  )
}