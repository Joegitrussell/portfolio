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
            explanation:"A Four week group project at the end of the Bootcamp. A Foodbank Finder App allowing users to type in a location and return a list of Foodbanks in the area utilising a Foodbank API and the Google Maps API as well as an Supabase SQL backend for comments and community functionality. UI/UX based upon market research to keep the App easy to use with low cognitive load and fully mobile responsive. Tech stack: Next.js, Tailwind, Supabase SQL, Supabase Auth, Jest, React testing library, Cypress and Vercel"
        },
        {
          id: 2,
          title: ' The Study Hub',
          imageSrc: studyhub,
          url: "https://joerussell-week9-teamproject.vercel.app/",
          explanation:"A One week group project at Week 8 of the Bootcamp. Enables students to easily receive more information around study topics and then comment to enable communication. Made exclusively for desktop use. Tech stack: React, CSS, Node.JS, Express, Jest, Cypress and Vercel"
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

            {portfolios.map(({id, title, imageSrc, url, explanation}) => (
             //   <Link key ={id} href={`/portfolio/${url}`}>
             <div>
             <Link key ={id} href={url} target="_blank">
                    <div className="cursor-pointer group shadow-ms
                    shadow-grey-600 overflow-hidden round-md">
                        <Image src={imageSrc} alt={title} className="rounded-ms duration-200 hover:scale-110"/>
                        <h2 className='text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4'>
                            {title}
                        </h2>
                    </div>
                </Link>
                <p>{explanation}</p>
                </div>
            ))}

            </div>

        <div className='flex items-center justify-center'>
        {/* <Link href="/portfolio">
          <div className='group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold upercase rounded-md tracking-wider'>
          All Projects
            <span className='-rotate-90 duration-100 ease-in group-hover:rotate-0'>
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link> */}
        </div>
        </div>
    </div>
  )
}

export default Portfolio