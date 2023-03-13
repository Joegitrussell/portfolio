import React from 'react'
import Image from 'next/image'
import cypress from '../public/cypress.png'

const Experience = () => {

    const experiences = [
        {
            id:1,
            title:"HTML",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        {
            id:2,
            title:"CSS",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
        },
        {
            id:16,
            title:"Tailwind",
            src: "https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg" 
        },
        {
            id:3,
            title:"Javascript",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
            id:4,
            title:"Typescript",
            src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          
        },
        {
            id:5,
            title:"Node.JS",
            src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
        },
        {
            id:6,
            title:"PostgreSQL",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" 
        },
        {
            id:7,
            title:"React",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
        },
        {
            id:8,
            title:"Next.JS",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
        },
        {
            id:9,
            title:"Express",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
        }, {
            id:10,
            title:"Github",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
        }, {
            id:11,
            title:"Visual Studio Code",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain-wordmark.svg"
        }, 
        {
            id:12,
            title:"Jest",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
        }, 
        {
            id:13,
            title:"Cypress",
            src: cypress
        },
        {
            id:14,
            title:"Java",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
        },
        {
            id:15,
            title:"mongoDB",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
        },
    ]

  return (
    <div id="experience" className="w-full">
      <div className='max-w-screen-xl mx-auto px-8 py-16
        text-center md:text-left'>
            <h2 className='text-5xl md:text-7xl tracking-wider
            uppercase text-blue-500 font-bold'>
                Experience
            </h2>
            <p className='py-4 max-w-lg'>
                {/* testing test fummy dummy */}
            </p>
            <div className='grid lg:grid-cols-4 gap-8'>
                {
                    experiences.map(({id, title, src}) => (
                    <div key={id} className="flex flex-col
                    lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
                    odd:shadow-rose-400 even:shadow-blue-400">

                        <Image src={src} width="64" height="64" alt={title} />
                        <h3 className='font-light'>{title}</h3>
                    </div>
                    )
                )
            }

            </div>
            </div>
    </div>
  )
}

export default Experience