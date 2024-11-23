import React from 'react'
import Layout from '../../components/layout/Layout';
import Herosection from '../../components/herosection/Herosection';
import BookingSlider from '../../components/BookingSlider';
import AboutTGA from '../../components/AboutTga';

const Home = () =>
{
  return (
    <>
    <Layout>
        <Herosection/>
        <AboutTGA/>
        <BookingSlider/>
    </Layout>
    </>
  )
}

export default Home;