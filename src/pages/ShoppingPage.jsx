import React from 'react'
import CartPage from '../components/CartPage'
import Navbar2 from '../components/Navbar2'
import ProductSection from '../components/ProductSection'
import ShoppingArea from '../components/ShoppingArea'
import SideCategories from '../components/SideCategories'


const ShoppingPage = () => {
  return (
    <div>
      <Navbar2 />     
      <div className='flex'>
        <SideCategories/>
        <div className='flex-1'><ShoppingArea/></div>      
      </div>
      <CartPage/>
    </div>
    
    
  )
}

export default ShoppingPage