import React from 'react'
import { MdExpandMore } from 'react-icons/md'
import photo from '../public/profile.png'
import Image from 'next/image'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div id="home" className='h-screen w-full text-center '>
      <div className='max-w-screen-xl mx-auto w-full h-full pt-24
 flex flex-col justify-around items-center'>
        <div className='w-64 h-64 mx-auto overflow-hidden rounded-xl'>
          <Image src={photo} alt="profile photo"/>
        </div>
        <h1 className="uppercase font-bold text-gray-700 text-7xl">
          Aspiring Software Engineer
        </h1>

        <p className='text-gray-600 text-xl max-w-sm mx-auto'>
          I am a lifelong Engineer with 16 years work experience, an apprenticeship and a engineering degree. 
          I wanted to use these skills in the tech world and made the huge decision to retrain as a Software Engineer and graduated from the School of Code in February 2023!
        </p>

        <Link href="/#me">
          <div className='group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold upercase rounded-md tracking-wider cursor-pointer'>
            Learn more about me
            <span className='-rotate-90 duration-100 ease-in group-hover:rotate-0'>
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HomePage