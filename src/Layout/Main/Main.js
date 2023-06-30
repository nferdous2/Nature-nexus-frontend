import React from 'react'
import Header from './../../pages/shared/Header/Header'
import Footer from '../../pages/shared/Footer/Footer'
import { Outlet } from 'react-router'

const Main = () => {
  return (
    <div>
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </div>
  )
}

export default Main
