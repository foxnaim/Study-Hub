import React from 'react'
import Link from 'next/link'
const NavBar = () => {
 return (
  <nav className='flexBetween navbar'>
   <div className='flex-1 flexStart gap-10'>
    <Link
     href="/"
     className="flexCenter cursor-pointer text-3xl bg-gradient-to-r from-pink-600 via-purple-600 to-gray-100 bg-clip-text text-transparent">
     Luki-lu
    </Link>
    <ul className='xl:flex hidden text-small gap-7'>
     <li className='text-base text-gray-600 hover:text-violet-600 transition-all duration-100 ease-in-out cursor-pointer'>Explore</li>
     <li className='text-base text-gray-600 hover:text-violet-600 transition-all duration-100 ease-in-out cursor-pointer'>About</li>
     <li className='text-base text-gray-600 hover:text-violet-600 transition-all duration-100 ease-in-out cursor-pointer'>Contact</li>
     </ul>
   </div>
  </nav>
 )
}

export default NavBar
