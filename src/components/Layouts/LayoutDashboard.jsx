import React from 'react'
import FooterDashBoard from '../FooterDashBoard/FooterDashBoard'
import Navbar from '../Navbar/Navbar'
import SideNav from '../SideNav/SideNav'

const LayoutDashboard = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='flex'>
        <SideNav />
        <section className='w-full flex flex-col gap-10 py-5 px-5'>{children}</section>
      </main>
    </>
  )
}

export default LayoutDashboard
