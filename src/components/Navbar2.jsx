import { Box,Drawer } from '@mui/material'
import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineCloseSquare, AiOutlineMenu} from 'react-icons/ai'
import {BsCart3} from 'react-icons/bs'
import CartPage from './CartPage'
import { useCart } from 'react-use-cart'
import { ShowChart } from '@mui/icons-material'
import CartContets from './CartContets'



const Navbar2 = ({ handleShowCart }) => {

  const {
    isEmpty,
    items,
    totalItems,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    emptyCart,
    removeItem,
  } = useCart();

    const [nav,setNav] = useState(false)
    

    const handleNav = () => {
        setNav(!nav)
    }

    const [showCart, setShowCart] = useState(false)
  return (
    <div className='text-white'>
      <nav className='flex justify-between items-center h-24 max-w-screen-2xl mx-auto px-4 border-b text-black'>
        <h1 className='w-full text-3xl font-bold hidden md:flex text-[#00df9a]'>
          CYCLECORE
        </h1>

        <ul data-aos="fade-left" data-aos-duration='1000' className='hidden md:flex font-pop font-semibold items-center'>
        <form action="" className='relative w-max md:block'>
          <input type="search" name="search" id="search" className='relative peer z-10 bg-transparent w-6 rounded-lg border cursor-pointer outline-none focus:w-52 focus:border-white focus:cursor-text focus:pl-10 uppercase focus:pr-4 pl-8 duration-700 p-1'   
          />

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="" className="h-6 w-8 absolute -left-1 inset-y-0 my-auto stroke-[#d4e253] border-r border-transparent text-white peer-focus:border-[#d4e253] peer-focus:stroke-[#d4e253]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </form>

            <div className='relative'>
              <BsCart3
            fontSize={25}
            className="ml-4 cursor-pointer"
            onClick={() => setShowCart(!showCart)}
              />

              <span className={`${isEmpty ? 'hidden' : 'absolute text-sm font-bold -top-3 left-9 bg-blue-300 rounded-full w-4 h-4 text-center flex items-center justify-center'}`}>
                {totalUniqueItems}
              </span>
            </div>
            
        
        
        
          <li className='px-4 py-1.5 group border-r'><a href="">HOME</a><div className='h-0.5 bg-white scale-x-0 group-hover:scale-100 transition-transform origin-center rounded-full duration-500 ease-out'></div></li>
          <li className='px-4 py-1.5 group border-r'><a href="">SHOP</a><div className='h-0.5 bg-gray-300 scale-x-0 group-hover:scale-100 transition-transform origin-center rounded-full duration-500 ease-out'></div></li>
          <li className='px-4 py-1.5 group border-r'><a href="">CUSTOMIZE</a><div className='h-0.5 bg-white scale-x-0 group-hover:scale-100 transition-transform origin-center rounded-full duration-500 ease-out'></div></li>
          <li className='px-4 py-1.5 group'><a href="">FAQS</a><div className='h-0.5 bg-white scale-x-0 group-hover:scale-100 transition-transform origin-center rounded-full duration-500 ease-out'></div></li>
          
          <button type='button' className='bg-cyan-400 text-white font-pop duration-500 px-6 py-1.5 ml-10 hover:bg-cyan-500 active:scale-90 rounded-lg  hover:scale-110'>SIGNIN</button>
        </ul>

        <div onClick={handleNav} className='flex items-center gap-4 md:hidden'>
          <form action="" className='relative w-max md:hidden block'>
            <input type="search" name="search" id="search" className='relative peer z-10 bg-transparent w-6 rounded-lg border cursor-pointer outline-none focus:w-52 focus:border-white focus:cursor-text focus:pl-10 uppercase focus:pr-4 pl-8 duration-700 p-1'   
            />

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="" className="h-6 w-8 absolute left-1 inset-y-0 my-auto stroke-[#d4e253] border-r border-transparent text-white peer-focus:border-[#d4e253] peer-focus:stroke-[#d4e253]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </form>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        <div className={nav ? 'fixed left-0 top-0 w-[60%] z-10 border-r border-r-slate-900 h-full bg-[#000300] ease-in-out duration-500 block md:hidden' : 'block md:hidden fixed left-[-100%]'}>  
          
          <a href="#"><img src='' alt="/" className='w-36 mx-2 mt-2'/></a>        
          <ul className='uppercase p-4 font-semibold font-pop rounded'>
            <li className='p-4 group border-b-[1.5px] border-b-slate-600 '><a href="">home</a><div className='h-0.5 bg-white scale-x-0 w-12 group-hover:scale-100 transition-transform origin-center rounded-full duration-500 ease-out'></div></li>
            <li className='p-4 group border-b-[1.5px] border-b-slate-600 '><a href="">shop</a><div className='h-0.5 bg-white scale-x-0 w-12 group-hover:scale-100 transition-transform origin-center rounded-full duration-500 ease-out'></div></li>
            <li className='p-4 group border-b-[1.5px] border-b-slate-600 '><a href="">customize</a><div className='h-0.5 bg-white scale-x-0 w-[92px] group-hover:scale-100 transition-transform origin-center rounded-full duration-500 ease-out'></div></li>
            <li className='p-4 group'><a href="">faqs</a><div className='h-0.5 bg-white scale-x-0 w-12 group-hover:scale-100 transition-transform origin-center rounded-full duration-500 ease-out'></div></li>
            <button type='button' className='bg-cyan-400 text-white font-pop duration-500 mt-7 px-10 py-2 hover:bg-cyan-500 rounded hover:scale-110'>SIGN-IN</button>
          </ul>
        </div>

        
      </nav>

      <Drawer
        open={showCart}
        onClose={() => setShowCart(!showCart)}
        anchor="right"
        PaperProps={{
          sx: { width: 550, background: "white", borderRadius: 0, px:'10px' },
        }}
      >
        <CartContets/>
      </Drawer>
    </div>
  )
}

export default Navbar2
