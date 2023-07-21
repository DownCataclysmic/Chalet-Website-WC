import React from 'react'
import {
    FaDribbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwiiterSquare,
  } from 'react-icons/fa'

function Footer() {
  return (
    <div className='w-full absolute z-10'>
        <div className='mx-auto py-16 px-4 grid lg:cols-3 gap-8 text-gray-300 bg-[#9C7A70]'>
            <h1 style={{color:`black`}} className='font-bold text-2xl'>Castleman Retreats</h1>
        </div>

    </div>
  )
}

export default Footer