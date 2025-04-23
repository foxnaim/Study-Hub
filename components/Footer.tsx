import React from 'react'
import Link from 'next/link'
const Footer = () => {
 return (
  <footer className='flexStart footer'>
   <div className='flex flex-col gap-12 w-full'>
    <div className='flex items-start flex-col'>
     <Link
      href="/"
      className="flexCenter cursor-pointer text-3xl bg-gradient-to-r from-pink-100 via-purple-600 to-gray-100 bg-clip-text text-transparent">
      Luki-lu
     </Link>
     <p className='text-start text-sm font-normal mt-5 max-w-xs'>
      Flexibble is the world's leading community for creatives to share, grow, and get hired.
     </p>
    </div>
   </div>
  </footer>
 )
}

export default Footer
