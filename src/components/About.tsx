import Profile from "../../src/assets/images/profile.jpg"
import twitter from "../../src/assets/icons/twitter.svg"
import medium from "../../src/assets/icons/medium.svg"
import linkedin from "../../src/assets/icons/linkedin.svg"
import github from "../../src/assets/icons/github.svg"
import { motion } from "framer-motion";
function About() {
    const LinkNames = [github, linkedin, twitter, medium]
    const LinkLinks = ['https://github.com/Lakshmanshankar', "https://www.linkedin.com/in/lakshmanshankar/", "https://twitter.com/10Lakshman","https://medium.com/@lakshmanashankrc"]

    return (
        <div className='w-full flex flex-col lg:flex-row h-full items-center mt-14 bg-slate-300 bg-gradient-to-r from-red-200 to-amber-100 justify-start md:py-24 lg:py-36 py-10' id="about">
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

                <AboutText />

                <div className=" font-thin lg:text-2xl text-lg" id="contacts">

                    <div className='flex w-fit h-fit justify-evenly p-2'>
                        {
                            LinkNames.map((name, index) => {
                                return <Icons name={name} link={LinkLinks[index]} key={index} />
                            })
                        }
                    </div >      
                </div>
            </div>
            
        </div>
    )
}
export default About

function Icons({ name,link }: { name: any,link:any }) {
    return (
        <a href={link} className="w-12 h-12 md:w-14 md:h-14 mx-3">
            <img
                src={name}
                className='w-12 h-12 md:w-14 md:h-14 rounded-md  hover:animate-ping'
                alt={name}
                draggable={true}
            />
        </a>
       
    )
}


const textVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 0.5,
        },
    },
};

const AboutText = () => {
    return (
        <motion.div
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-gray-700 mt-8"
            variants={textVariants}
            initial="hidden"
            animate="visible"
        >
            <p>
                As a computer science graduate with skills in Next.js, React, and a
                strong expertise in Linux, I am a versatile developer who is comfortable
                working with various technologies and platforms. I also have knowledge
                about Azure and C++, which enables me to deliver high-quality solutions.
            </p>
            <br />
            <p>
                Apart from my technical skills, I am a dedicated and detail-oriented
                individual who is committed to delivering projects on time and on budget.
                I am comfortable working in a team environment, and I am always willing
                to learn and grow as a developer.
            </p>
            <br />
            <p>
                In my free time, I enjoy exploring new Vim configurations to improve my
                workflow and increase productivity. Overall, I am a motivated and
                enthusiastic developer who is passionate about creating innovative
                solutions that solve complex problems.
            </p>
        </motion.div>
    );
};
