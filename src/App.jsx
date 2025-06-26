import React from 'react'
import Login from './components/login'
import Sidebar from './components/sidebar'
import Product from './components/product'
import ProductUpdate from './components/productUpdate'

export default function App() {
  return (
    <div className='flex h-screen'>
      <Sidebar/>
      <div className="flex-1 overflow-y-auto">
        <Product />
        <ProductUpdate/>
      </div>
    </div>
  )
}
