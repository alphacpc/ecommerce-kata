import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './shared/Header';
import Footer from './shared/Footer';




const Layout = () => {


  return (

      <div className="">
        <div className=''>
          <Header/>
          <div className=''>
            {<Outlet/>}
          </div> 
          <Footer/>
        </div>
      </div>
  )
}

export default Layout;