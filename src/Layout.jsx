import React from 'react'
import Header from './pages/Header'
import Footer from './pages/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
   const hideHeaderRoutes = ['/profile'];
  return (
    <>
     {!hideHeaderRoutes.includes(location.pathname) && <Header />}
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
