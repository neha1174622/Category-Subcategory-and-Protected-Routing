import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/user/feature/Home'
import Signup from '../components/user/feature/Signup'
import UserModule from '../modules/UserModule'


const AllRoutes = () => {
  return (
        <>
            <Routes>
                <Route path='' element={<UserModule />}>
                  <Route path='' element={<Home />} />
                  
                  <Route path='signup' element={<Signup />} />

                </Route>

                </Routes>
        </>
  )
}

export default AllRoutes