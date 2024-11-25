import React from 'react'
import Layout from '../../components/layout/Layout';
import Herosection from '../../components/herosection/Herosection';
import BookingSlider from '../../components/BookingSlider';
import AboutTGA from '../../components/AboutTga';
import StatusSection from '../../components/StatusSection';
import GallarySection from '../../components/GallarySection';
import Testimonials from '../../components/Testimonials';

const Home = () =>
{
  return (
    <>
    <Layout>
        <Herosection/>
        <BookingSlider/>
        <GallarySection/>
        <AboutTGA/>
        <StatusSection/>
        <Testimonials/>
        
    </Layout>
    </>
  )
}

export default Home;