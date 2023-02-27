import Link from 'next/link'
import React from 'react'
import { MdExpandMore } from 'react-icons/md'
const Me = () => {
  return (
    <div id="me" className="w-full">
      <div className='max-w-screen-xl mx-auto px-8 py-16
        text-center md:text-left'>
            <h2 className='text-5xl md:text-7xl tracking-wider
            uppercase text-blue-500 font-bold'>
                Me
            </h2>
            <div className='shadow-xl shadow-blue-300 my-8 px-8'>
                <h1 className='py-4 max-w-3xl mx-auto'>Whats my story?</h1>
                <p className='py-4 max-w-2xl mx-auto'>
                    I have been working as a Traditional Engineer for the last 16 years, I have been very fortunate having completed
                    an Advanced Apprenticeship within a Oil Refinery and then worked there untill it shut down. I then taught myself
                     the skills needed to work as a Gas engineer and became self employed. During this time to fill my desire to 
                     learn and fulfil a ambition I earned a degree through the Open University in Engineering specialising in Energy
                      and sustainability. I'm proud to say I did this whilst working full time running my own business and raising two amazing kids.
                    
                </p>
                <h1 className='py-4 max-w-3xl mx-auto'>Why Tech?</h1>
                <p className='py-4 max-w-2xl mx-auto'>
                   After 10 years of running my own business I found myself longing for a challenge, it was a good job but it wasn't making
                   me happy and my brain wasnt engaged. I knew I had to make a change so I took the plunge and made arrangements to close my business.
                   For some time I had been doing courses on CodeAcademy and playing on Codepen after suggestions from friends and I made
                   a amazing discovery. Code was fantastic, I am engaged and challenged and I wanted to know more, it also was a brilliant way to use the engineering and problem solving skills I have been honing over the last 16 years. After researching the best way to
                    learn code for a career I came across bootcamps, and I applied to a couple. I was extremely fortunate to be offered a place
                    at the renowned School of Code, a 16 week fully funded intensive bootcamp run by Dr. Chris Meah, I later found out more than 4000 people applied and I was
                     one of the few to be enrolled and it was the best thing that could have happened!
                </p>
                <h1 className='py-4 max-w-3xl mx-auto'>What am i looking for?</h1>
                <p className='py-4 max-w-2xl mx-auto'>
                    I am looking for my first job in tech. The School of code trained and taught us to be full stack developers so I am comfortable with both
                     the front end and the back end. During the course I was constantly working with people every day, in pairs and groups so I am
                     very used to working with others. I am very interested in differnt stacks and languages, I have even started to learn Java and MongoDB in my 
                     spare time! I particulary enjoyed backend and testing at the bootcamp and found myself to be a excellent problem solver and bug fixer. I am just looking
                     for someone to give me a chance, I am new to coding but not to work and problem solving, I have a proven work history of working really well with others
                     and being dedicated to my career, I am especially proud of the fact that I have only worked for two companies in the last 16 years!

                </p>
                <h1 className='py-4 max-w-2xl mx-auto'>Please reach out and get in contact, my CV can be viewed below!</h1>
                <div className='flex items-center justify-center gap-10'>
                    <Link href='/Joe_Russell_CV.pdf' download={true}>
                        <div className='group flex items-cener justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer'>
                       Curriculum vitae
                            <span className='-rotate-90 duration-100 ease-in group-hover:rotate-0'>
                                <MdExpandMore size={25}/>
                            </span>
                        </div>
                    </Link>
                    <Link href="/portfolio">
                    <div className='group flex items-cener justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer'>
                       my portfolio
                            <span className='-rotate-90 duration-100 ease-in group-hover:rotate-180'>
                                <MdExpandMore size={25}/>
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Me