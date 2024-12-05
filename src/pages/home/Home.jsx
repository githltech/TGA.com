import React from 'react'
import Layout from '../../components/layout/Layout';
import Herosection from '../../components/herosection/Herosection';
import PackagesCart from '../../components/PackagesCart';
import WhyTga from '../../components/WhyTga';
import AccomodationCart from '../../components/AccomodationCart';
import ExpPackagesCart from '../../components/ExpPackagesCart';
import TreksCart from '../../components/TreksCart';
import EventsCart from '../../components/EventsCart';
import StatusSection from '../../components/StatusSection';
import GallarySection from '../../components/GallarySection';
import Testimonials from '../../components/Testimonials';
import PerfectDestinations from '../../components/PerfectDestinations';
import AboutTga from '../../components/AboutTga';
import BlogTga from '../../components/BlogTga';

const Home = () =>
{
  return (
    <>
    <Layout>
        <Herosection/>
        <AboutTga/>
        <ExpPackagesCart/>
        <WhyTga/>
        <AccomodationCart/>
        <GallarySection/>
        <TreksCart/>
        <EventsCart/>
        <PackagesCart/>
        <PerfectDestinations/>
        <BlogTga/>
        <StatusSection/>
        <Testimonials/>
        
    </Layout>
    </>
  )
}

export default Home;