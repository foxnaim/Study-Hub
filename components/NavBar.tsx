import React from 'react'
import Link from 'next/link'
import { NavLinks } from '@/constants'
import AuthProviders from './AuthProviders'


const NavBar = () => {
 const session = {};
 return (
  <nav className='flexBetween navbar'>
   <div className='flex-1 flexStart gap-10'>
    <Link
     href="/"
     className="flexCenter cursor-pointer text-3xl bg-gradient-to-r from-pink-100 via-purple-600 to-gray-100 bg-clip-text text-transparent">
     Luki-lu
    </Link>
    <ul className='xl:flex hidden text-small gap-7'>
     {NavLinks.map((link) => (
      <Link href={link.href} key={link.key}>
       {link.text}
      </Link>
     ))}
     </ul>
   </div>
   <div className='flexCenter gap-4'>
   {session ? (
  <>
    UserPhoto
    <Link href="/create-project">Share work</Link>
  </>
) : (
  <AuthProviders />
)}

   </div>
  </nav>
 )
}

export default NavBar
