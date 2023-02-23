import React from 'react'
import { MdExpandMore } from 'react-icons/md'
import Link from 'next/link'
import Image from 'next/image'
import foodbank from '../public/foodbank.jpg'
import studyhub from '../public/studyhub.jpg'
import pokedex from '../public/pokedex.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            title: ' The Foodbank Network',
            imageSrc: foodbank,
            url: "https://foodbanknetwork.vercel.app",
        },
        {
          id: 2,
          title: ' The Study Hub',
          imageSrc: studyhub,
          url: "https://joerussell-week9-teamproject.vercel.app/",
      },
      {
        id: 1,
        title: 'Pokedex',
        imageSrc: pokedex,
        url: "https://bc13-w2d5-hackathon-fetch-room-48-joe-and-fe40b9el8.vercel.app/",
    }
    ]
  return (
    <div id="portfolio" className='w-full'>
        <div className='max-w-screen-xl mx-auto px-8 py-16
        text-center md:text-left'>
            <h2 className='text-5xl md:text-7xl tracking-wider
            uppercase text-blue-500 font-bold'>
                portfolio
            </h2>
            <p className='py-4 max-w-lg'>
                {/* //testing test fummy dummy */}
            </p>
            <div className='max-w-5xl mx-auto grid md:grid-cols-2
            gap-8'>

            {portfolios.map(({id, title, imageSrc, url}) => (
             //   <Link key ={id} href={`/portfolio/${url}`}>
             <Link key ={id} href={url} target="_blank">
                    <div className="cursor-pointer group shadow-ms
                    shadow-grey-600 overflow-hidden round-md">
                        <Image src={imageSrc} alt={title} className="rounded-ms duration-200 hover:scale-110"/>
                        <h2 className='text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4'>
                            {title}
                        </h2>
                    </div>
                </Link>
            ))}

            </div>

        <div className='flex items-center justify-center'>
        <Link href="/portfolio">
          <div className='group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold upercase rounded-md tracking-wider'>
          All Projects
            <span className='-rotate-90 duration-100 ease-in group-hover:rotate-0'>
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
        </div>
        </div>
    </div>
  )
}

export default Portfolio