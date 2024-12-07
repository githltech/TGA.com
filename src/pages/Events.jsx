import React from 'react';
import Layout from '../components/layout/Layout';
import EventsCart from '../components/EventsCart';


const Events = () => {

  return (
   <Layout>
    <div className="mt-32">
        <EventsCart/>
    </div>
   </Layout>
  );
};

export default Events;
