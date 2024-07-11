import React from 'react'
import Header from './Homepage/Header'
import HomePage from './Homepage/HomePage'
import ShoppingPage from './ShoppingPage/ShoppingPage'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
       <Outlet />
      </div>
    </div>
  )
}

export default Layout
