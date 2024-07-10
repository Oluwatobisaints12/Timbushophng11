import React from 'react'
import Sidebar from './Sidebar'
import GownProductList from './GownProductList'

const ProductList = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Sidebar />
      <GownProductList />
    </div>
  )
}

export default ProductList
