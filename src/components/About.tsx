import React from 'react'
import { motion } from 'framer-motion'
import Profile from "../../src/assets/images/profile.jpg"
import twitter from "../../src/assets/icons/twitter.svg"
import medium from "../../src/assets/icons/medium.svg"
import linkedin from "../../src/assets/icons/linkedin.svg"
import github from "../../src/assets/icons/github.svg"

function About() {
    const LinkNames = [github, linkedin, twitter, medium ]

    return (
        <div className='w-full flex flex-col lg:flex-row h-full items-center mt-14 bg-slate-300 bg-gradient-to-r from-red-200 to-amber-100 justify-start md:py-24 lg:py-36 py-10'>
            <img
                src={Profile}
                className='rounded-lg sm:ml-10 sm:mt-14 md:rounded-2xl p-1.5 profile-img'
                alt='profile'
                draggable={true}
            />
            <div className="px-15 mx-10 flex h-full flex-col">
                <div className=" text-4xl text-orange-600 text-center p-3 font-ubuntu md:text-6xl lg:text-6xl">
                    About Me
                </div>

                <div className=" font-thin lg:text-2xl text-lg">
                    As a computer science graduate with skills in Next.js, React, and a strong expertise in Linux, I am a versatile developer who is comfortable working with various technologies and platforms. I also have knowledge about Azure and C++, which enables me to deliver high-quality solutions.
                    <br></br>
                    <br></br>

                    Apart from my technical skills, I am a dedicated and detail-oriented individual who is committed to delivering projects on time and on budget. I am comfortable working in a team environment, and I am always willing to learn and grow as a developer.
                    <br></br>
                    <br></br>

                    In my free time, I enjoy exploring new Vim configurations to improve my workflow and increase productivity. Overall, I am a motivated and enthusiastic developer who is passionate about creating innovative solutions that solve complex problems.

                    <div className='flex w-fit h-fit justify-evenly p-2'>
                        {LinkNames.map((item:string) =>
                            <div className='mx-1 rounded p-2'>
                                <Icons name={item} />
                            </div>
                        )}
                    </div >      
                </div>
            </div>
            
        </div>
    )
}

export default About


function Icons({ name }: { name: any }) {
    return (
        <img
            src={name}
            className='w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-300 bg-gradient-to-r from-red-200
             to-amber-100 p-1 hover:shadow-lg hover:animate-ping'
            alt={name}
            draggable={true}
        />
    )
    
}

