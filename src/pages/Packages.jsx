import React from 'react';
import Layout from '../components/layout/Layout';
import PackagesCart from '../components/PackagesCart';

function Packages() {
  return (
    <>
    <div className="mt-32">
        <Layout>
            <PackagesCart/>
        </Layout>
    </div>
    </>
  )
}

export default Packages;