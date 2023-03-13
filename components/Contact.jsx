import Image from 'next/image'
import React from 'react'
import crazyjoe from '../public/crazyjoe_64.png'
import {FaBars, FaTimes, FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa'

const Contact = () => {
  return (
    <div id="contact" className='w-full'>
        <div className='max-w-screen-xl mx-auto  px-20 py-20
    text-center md:text-left'>
             <h2 className='text-5xl md:text-7xl tracking-wider
        uppercase text-blue-500 font-bold'>
            Contact
            </h2>

            <div className='flex flex-col md:flex-row gap-8 shadow-xl
            shadow-blue-300 bg-white mt-4'>
            <div className="w-full md:w-1/2 h-full rounded-xl p-4">
                <Image src={crazyjoe} alt="contact" className="w-64 h-64 mx-auto overflow-hidden rounded-xl"></Image>
                <p className='pt-2 pb-8'>
                    Please reach out, I would love to hear about any opportunities and make new connections
                </p>
                <div className='grid grid-cols-3 mx-auto w-4/5 gap-10'>
                <a href="https://www.linkedin.com/in/joe-russell-b-eng/" target="_blank"><div className='flex items-center justify-center rounded-full shadow-md
                            shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer'>
                            <FaLinkedin size={25}/>
                        </div>
                        </a>
                        <a href="https://github.com/Joegitrussell" target="_blank"><div className='flex items-center justify-center rounded-full shadow-md
                            shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer'>
                            <FaGithub size={25}/>
                        </div>
                        </a>
                        <a href="https://twitter.com/JoeRuss07566144?t=xcrBi_BLU_OKZwGXh8gBqw&s=03" target="_blank"><div className='flex items-center justify-center rounded-full shadow-md
                            shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer'>
                            <FaTwitter size={25}/>
                        </div>
                        </a>
                    </div>
             </div>

             <div className='"w-full md:w-1/2 h-full rounded-xlp-4'>
                <div className='hidden md:block p-4 text-left'>
                    <form action="https://getform.io/f/c72e6266-e8b3-4fd2-85d9-c5e63ceaa0bf"
                            method="POST">
                        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                            <div className='flex flex-col'>
                                <label className='capitalize text-sm py-2 text-slate-600 font-light'>name
                                </label>
                                <input
                                type="text"
                                name="name" className="border-2 rounded-lg p-3 flex focus:outline:none border-blue-200">
                                </input>
                            </div>

                            <div className='flex flex-col'>
                                <label className='capitalize text-sm py-2 text-slate-600 font-light'>Phone
                                </label>
                                <input
                                type="text"
                                name="phone" className="border-2 rounded-lg p-3 flex focus:outline:none border-blue-200">
                                </input>
                            </div>

                            <div className='flex flex-col col-span-2'>
                                <label className='capitalize text-sm py-2 text-slate-600 font-light'>Email
                                </label>
                                <input
                                type="email"
                                name="email" className="border-2 rounded-lg p-3 flex focus:outline:none border-blue-200">
                                </input>
                            </div>

                            <div className='flex flex-col col-span-2'>
                                <label className='capitalize text-sm py-2 text-slate-600 font-light'>Message
                                </label>
                                <textarea
                                name="message"
                                rows="10"
                                className="border-2 rounded-lg p-3 flex focus:outline:none border-blue-200">

                                </textarea>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button className='group my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md
                            tracking-wider cursor-pointer hover:scale-105 duration-200'>Send Message</button>
                        </div>
                    </form>

                </div>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Contact