import React from 'react'
import Icon from '../assets/Icon.svg'

const Header = () => {

    const listItems = ["Home", "Service","Feature", "Product", "Testimonial", "FAQ"]
    const navLinks = listItems.map((list,index) => <li key={index}>{list}</li>)
  return (
       <header className='w-full max-w-8xl mx-auto px-4 py-2 border-1 border-blue-600'>
        <nav className='px-30'>
            <div className='flex justify-between items-center'>
                {/* Nav logo */}
                <a href="" className='text-2xl  font-semibold flex items-center space-x-3'><img src={Icon} alt="" className='w-10 inline-block items-center' /><span className=''>Nexcent</span></a>
                
            {/* nav-links */}
            <ul className='hidden md:flex space-x-4'>
                {navLinks}
            </ul>
            <div className=' space-x-5 hidden lg:flex items-center max-w-[182px]'>
                <a href="" className='lg:flex items-center'>Login</a>
                <a href=""><button className='px-4 py-2 bg-green-500 text-white rounded'>Sign Up</button></a>
            </div>
            </div>
        </nav>
    </header>
  )
}

export default Header