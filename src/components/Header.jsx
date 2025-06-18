import React from 'react'
import Icon from '../assets/Icon.svg'

const Header = () => {

    const listItems = ["Home", "Service","Feature", "Product", "Testimonial", "FAQ"]
    const navLinks = listItems.map((list,index) => <li key={index}>{list}</li>)
  return (
       <header>
        <nav>
            <div className=''>
                {/* Nav logo */}

                <a href="" className='text-2xl  font-semibold flex items-center space-x-3'><img src={Icon} alt="" className='w-10 inline-block items-center' /><span className=''>Nexcent</span></a>
                
            {/* nav-links */}
            <ul className='hidden md:flex'>
                {navLinks}
            </ul>
            <div className='border-1 border-blue-600 space-x-5 hidden lg:flex items-center max-w-[182p'>
                <a href="" className='lg:flex items-center'>Login</a>
                <a href=""><button className='px-4 py-2 bg-green-500 text-white rounded'>Sign Up</button></a>
            </div>
            </div>
        </nav>
    </header>
  )
}

export default Header