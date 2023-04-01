import React from 'react'
import {motion} from 'framer-motion'
function About() {
  return (
      <div className='w-full flex flex-col lg:flex-row h-full items-center mt-14 bg-slate-300 bg-gradient-to-r from-red-200 to-amber-100 justify-start md:py-24 lg:py-36 py-10'>
          <motion.div
              className='m-0 p-0 md:pl-24 py-10'
              drag
            //   dragConstraints={{
            //       top: -0,
            //       bottom: -0,
            //       left: 0,
            //       right: 0
            //   }}
          >
              <div className="wi w-96 h-96 rounded-xl bg-slate-50 profile"></div>
          </motion.div>

          <div className="px-10 mx-10 flex h-full flex-col">
              <div className=" text-3xl text-orange-600 text-center p-3 font-ubuntu md:text-6xl lg:tex-6xl">
                  About Me
              </div>

              <div className="font-rale font-bold lg:text-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum perferendis nulla, accusantium ut harum tempora amet libero deserunt alias perspiciatis fugiat aliquam placeat iusto suscipit quisquam ab sunt illo aut fugit repellendus, sapiente non adipisci! Ad iure ducimus hic ipsam possimus doloribus! Nemo laboriosam velit id aut, vero asperiores?
                  <br/>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum perferendis nulla, accusantium ut harum tempora amet libero deserunt alias perspiciatis fugiat aliquam placeat iusto suscipit quisquam ab sunt illo aut fugit repellendus, sapiente non adipisci! Ad iure ducimus hic ipsam possimus doloribus! Nemo laboriosam velit id aut, vero asperiores?
              
              </div>
          </div>
    </div>
  )
}

export default About