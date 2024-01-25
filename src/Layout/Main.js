import React from 'react'
import Header from '../pages/shared/Header'
import Footer from '../pages/shared/Footer'
import { Outlet } from 'react-router'
const Main = () => {
  return (
    <div>
        <Header />
        <div >
        <Outlet />
        </div>
        
        <Footer>
        </Footer>
            </div>
  )
}

export default Main
