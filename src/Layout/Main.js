import React from 'react'
import Footer from '../shared/Footer'
import { Outlet } from 'react-router'
import Header from '../shared/Header'
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
