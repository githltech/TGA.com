import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from './HeroSection'
import MissionSection from './MissionSection'
import TeamSection from './TeamSection'
import ImageSlider from './ImageSlider'
import SpotlightSection from './SpotlightSection'
import OurPresence from './OurPresence'
import Timeline from './Timeline'
import PictureGallery from './PictureGallary'

function Aboutus() {
  return (
    <Layout>
    <div></div>
    <HeroSection/>
    <MissionSection/>
    <TeamSection/>
    <Timeline/>
    <ImageSlider/>
    <PictureGallery/>
    <SpotlightSection/>
    <OurPresence/>
    </Layout>
  )
}

export default Aboutus