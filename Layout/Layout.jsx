import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/footer'
import Navbars from '../Components/Navbar'

function Layout() {
  return (
    <>
       <Navbars />
          <Outlet />
        <Footer />
    </>
  )
}

export default Layout;