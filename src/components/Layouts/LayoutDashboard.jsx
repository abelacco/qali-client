import React from 'react'
import FooterDashBoard from '../FooterDashBoard/FooterDashBoard'
import NavBarDashboard from '../Navbar/NavBarDashboard'
import SideNav from '../SideNav/SideNav'

const LayoutDashboard = ({ children }) => {
  return (
    <>
      <NavBarDashboard />
      <main className='flex'>
        <SideNav />
        <section className='w-full flex flex-col gap-10 py-5 px-5'>{children}</section>
      </main>
    </>
  )
}

export default LayoutDashboard
