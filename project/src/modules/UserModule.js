import React from 'react'
import Header from '../components/user/shared/Header'
import Footer from '../components/user/shared/Footer';
import { Outlet } from 'react-router-dom';


const UserModule = () => {
  return (
    <>
        <Header />
           <Outlet /> 
        <Footer />
    </>
  )
}

export default UserModule