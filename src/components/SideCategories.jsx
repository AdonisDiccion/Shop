import React, {useState} from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const SideCategories = () => {

    const [rbDrop, setRbDRop] = useState(false)
    const [mtbDrop, setMtbDrop] = useState(false)
  return (
    <div className='h-screen pt-[3%] ' data-aos="fade-down" data-aos-delay='300' data-aos-duration='1000'>
        <div className='p-2 h-screen rounded-sm'>
            <h1 className='text-3xl font-semibold mb-4'>CATEGORIES</h1>

            <div >
                <span onClick={()=> setRbDRop(!rbDrop)} className='hover:text-blue-300 cursor-pointer flex'>ROAD BIKES<ArrowDropDownIcon className={`${rbDrop && 'rotate-[180deg]'}`}/></span> 

                <ul className={`${!rbDrop && 'hidden'} block`}>
                    <li>GIANT</li>
                    <li>SPECIALIZED</li>
                    <li>MOUNTAIN PEAK</li>
                </ul>
            </div>

            <div >
                <span onClick={()=> setMtbDrop(!mtbDrop)} className='hover:text-blue-300 cursor-pointer flex'>MOUNTAIN BIKES<ArrowDropDownIcon className={`${rbDrop && 'rotate-[180deg]'}`}/></span> 

                <ul className={`${!mtbDrop && 'hidden'} block`}>
                    <li>SHIMANO</li>
                    <li>SPECIALIZED</li>
                    <li>MOUNTAIN PEAK</li>
                </ul>
            </div>

            <div >
                <span className='hover:text-blue-300 cursor-pointer flex'>FIXED BIKES</span> 

                
            </div>

            <div >
                <span className='hover:text-blue-300 cursor-pointer flex'>KIDS BIKES</span> 
            </div>
            
        </div>
    </div>
  )
}

export default SideCategories