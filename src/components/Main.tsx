import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
function Main() {
    return (
        <main className=' mt-12 py-14 sm:py-16 md:py-24 bg-slate-300 bg-gradient-to-r from-red-200 to-amber-100 flex flex-col xl:flex-row lg:justify-center xl:justify-center xl:items-center lg:py-48' id='main'>
         
            
            <div className="two w-full lg:w-full justify-center items-center xl:w-max ">
                <h1 className={`spring text-6xl w-fit sm:text-6xl lg:6xl lg:px-16 xl:text-8xl back-gradient ml-5 sm:ml-0  sm:py-0 sliding text1 mt-5 sm:mt-5 justify-center pl-3 sm:p-1`}>
                    Hi, I am <span className=' highlight underline text-orange-500 font-bold'>Lakshman</span>
                </h1>
                <br />
                <LetterDrop />
                <div className="readmore sm:text-7xl text-4xl mt-5 spring flex justify-center lg:py-10">
                    <motion.div
                        animate={{
                            scale: [1, 2, 2, 1.5, 1],
                            rotate: [0, 180, 127, 90, 180],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                            transition: {
                                duration: 1.5,
                                
                            },
                        }}
                    >
                        <a href="#about" className='topdown hover:animate-pulse' > 👇 </a>
                        </motion.div>
                </div>
            </div>
        </main>
    )
}

export default Main


const letters = Array.from("CS Student | Next.js Dev | Linux User ");

const containerVariants = {
    visible: {
        transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    },
    hidden: {}
};

const letterVariants = {
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300 } },
    hidden: { y: 100, opacity: 0 }
};

const LetterDrop = () => (
    <AnimatePresence>
        <motion.h1
            className={`spring text-2xl sm:text-xl text-center lg:6xl lg:px-16 xl:text-4xl back-gradient ml-5 sm:ml-0  sm:py-0 sliding  mt-10 sm:mt-5 justify-center p-3 sm:p-1`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            {letters.map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                    {letter}
                </motion.span>
            ))}
        </motion.h1>
    </AnimatePresence>
);
