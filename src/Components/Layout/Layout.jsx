import React from 'react'
import Staly from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

export default Layout