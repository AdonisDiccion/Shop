import React, { useState } from 'react'


// icons
import { BsFillCaretLeftFill} from 'react-icons/bs';
import { MdOutlineCategory } from 'react-icons/md';
import { BsController } from 'react-icons/bs';
import { FiShoppingBag } from 'react-icons/fi';
// import { TbBrandLoom } from 'react-icons/tb';
import {BiCategory} from 'react-icons/bi'
import {GiBasketballBall} from 'react-icons/gi'
import {FaMailchimp} from 'react-icons/fa'
import {FaPowerOff} from 'react-icons/fa'





const AdminDashboardSideBar = () => { 
    const [open,setOpen] = useState(false)

    const [openProduct,setOpenProduct] = useState(false)

  return (
    <div data-aos='fade-right' data-aos-duration='1000' className='flex flex-col h-screen'>
      <div className={`${open ? 'w-72' : 'w-20'} flex flex-col h-screen p-5 pt-8 bg-black relative transition-all duration-700 ease-in-out`}>
        <div className='flex-1'>
        <BsFillCaretLeftFill onClick={() => setOpen(!open)} className={`absolute cursor-pointer -right-3 top-9 border-2 border-black bg-white  rounded-full hover:scale-110 ${!open ? 'rotate-180 transition-all duration-500 ease-out' : 'transition-all duration-700 ease-out'}`} size={25}/>
        <div className='flex items-center gap-x-4'>
          <img src={logo} alt="" className={`cursor-pointer duration-1000 animate-spin w-[50px]`} style={{animationDuration: '3s'}} />
          <h1 className={`text-white origin-left font-medium text-xl duration-300 tracking-widest ${!open && 'scale-0'}`}>ADMIN</h1> 
        </div>
        
        <div className='pt-6 text-slate-100'>

          <div className={`hover:scale-110 group text-slate-100 font-semibold flex items-center hover:bg-light-white rounded-md uppercase cursor-pointer transition-all duration-300 ease-in-out mb-4 p-[7.5px] active:bg-light-white`}>
            <div><MdOutlineCategory size={25}/></div>
            <span style={{transitionDelay: '300ms'}} className={`${!open && 'opacity-0 translate-x-28 overflow-hidden'} tracking-wider whitespace-pre origin-left duration-300 m-2.5`}>DASHBOARD<div className='h-0.5 bg-white scale-x-0 group-hover:scale-100 transition-transform origin-center rounded-full duration-500 ease-out'></div></span>
          </div>
          
          <div  onClick={() => setOpenProduct(!openProduct)} className={`hover:scale-110 group text-slate-100 font-semibold flex items-center hover:bg-light-white rounded-md uppercase cursor-pointer transition-all duration-300 ease-in-out p-[7.5px]`}>
            <div><BsController size={25}/></div>
            <span style={{transitionDelay: '400ms'}} className={`${!open && 'opacity-0 translate-x-28 overflow-hidden'} tracking-wider whitespace-pre origin-left duration-300 m-2.5`}>PRODUCTS<div className='h-0.5 bg-white scale-x-0 group-hover:scale-100 transition-transform origin-center rounded-full duration-500 ease-out'></div></span>
          </div>

          <div style={{transitionDelay: '300ms'}} className={`${open ? `${!openProduct ? 'transition-all duration-500 ease-in-out delay-200 rounded-md pl-7' : 'hidden'}` : 'hidden'}`}>
          <ul>
              <li className={`group hover:scale-110 flex items-center font-semibold gap-x-2 hover:bg-light-white rounded-md uppercase cursor-pointer transition-all duration-300 ease-in-out p-2`}>
                <BiCategory fontSize={20}/><span>CATEGORY<div className='h-0.5 bg-white scale-x-0 group-hover:scale-100 transition-transform origin-center rounded-full duration-500 ease-out'></div></span>                   
              </li>
              <li className={`group hover:scale-110 flex items-center font-semibold gap-x-2 hover:bg-light-white rounded-md uppercase cursor-pointer transition-all duration-300 ease-in-out p-2`}>
                <GiBasketballBall fontSize={20}/><span>SUB-CATEGORY<div className='h-0.5 bg-white scale-x-0 group-hover:scale-100 transition-transform origin-center rounded-full duration-500 ease-out'></div></span> 
                
              </li>
              <li className={`group hover:scale-110 flex items-center font-semibold gap-x-2 hover:bg-light-white rounded-md uppercase cursor-pointer transition-all duration-300 ease-in-out p-2`}>
                <FaMailchimp fontSize={20}/>PRODUCT LISTS 
                <div className='h-0.5 bg-white scale-x-0 group-hover:scale-100 transition-transform origin-center rounded-full duration-500 ease-out'></div>
              </li>
            </ul>
          </div>

          <div className='hover:scale-110 group text-slate-100 font-semibold flex items-center hover:bg-light-white rounded-md uppercase cursor-pointer transition-all duration-300 ease-in-out mt-4 p-[7.5px]'>
              <div><FiShoppingBag size={25}/></div>
              <span style={{transitionDelay: '500ms'}} className={`${!open && 'opacity-0 translate-x-28 overflow-hidden'} tracking-wider whitespace-pre origin-left duration-300 m-2.5`}>ORDERS<div className='h-0.5 bg-white scale-x-0 group-hover:scale-100 transition-transform origin-center rounded-full duration-500 ease-out'></div></span>
          </div>
          
        </div>
        </div>

        <div className='text-slate-100 flex border-t'>
        
          <div className='hover:scale-110 group text-slate-100 font-semibold flex items-center hover:bg-light-white rounded-md uppercase cursor-pointer transition-all duration-300 ease-in-out p-[7.5px] w-full'>
          
          <div><FaPowerOff size={25}/></div>
          <span style={{transitionDelay: '600ms'}} className={`${!open && 'opacity-0 translate-x-28 overflow-hidden'} tracking-wider whitespace-pre origin-left duration-300 m-2.5`}>LOGOUT</span>
          </div>         
        </div>          
      </div>
    </div>
  )
}

export default AdminDashboardSideBar
