import React from 'react'
import Nav from './Components/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'

export default function Layout() {
  return (
    <>
       <Nav/>
       <Outlet/>
       <Footer/> 
    </>
  )
}
