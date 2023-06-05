import React from 'react'
import FooterDashBoard from '../FooterDashBoard/FooterDashBoard'
import SideNav from '../Horarios/SideNav/SideNav'
import Navbar from '../Navbar/Navbar'

const LayoutDashboard = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='flex'>
        <SideNav />
        <section className='w-full flex flex-col gap-10 py-5 px-5'>{children}</section>
      </main>
      <FooterDashBoard />
    </>
  )
}

export default LayoutDashboard
