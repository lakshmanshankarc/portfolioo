import { motion } from 'framer-motion';
import { MagicalText } from './Motion';


const projectsOne = {
    title: "Realtime Server Monitoring Application",
    description: "Developed a real-time server performance monitoring system using Kafka and Next.js,It collects performance metrics from the system, \
     including CPU usage, memory utilization, disk I/O, and network traffic.",
    links: [""],
    techStack: ["Kafka", "SocketIO", "Vite"]
};

const projectsTwo = {
    title: "Find Blood Donor Application",
    description: "The app features a beautiful and easy-to-use UI with Butter Flow and Vite Daisy UI frameworks, providing a seamless user experience.",
    links: ["https://github.com/lakshmanshankarc/find-blood-donor"],
    techStack: ["React", "MySQL", "Vite"]
};

const projectsThree = {
    title: "Student Performance Tracking System",
    description: "Web application which is primarily used by the professors and students. I created this project as my final year project. Implemented data visualization using Chart.js",
    links: ["https://github.com/lakshmanshankarc/student-performance-tracking"],
    techStack: ["Nextjs", "MySQL", "React"]
};
export default function Pro() {
    const ProjectsMap = [projectsOne, projectsTwo,projectsThree];

    return (
        <div className='w-full bg-gradient-to-r from-red-100 to-amber-100 my-4' id='projects'>
            <div className="text-4xl text-orange-600 mx-2 p-3 my-5 py-2 font-ubuntu md:text-6xl lg:text-6xl flex align-middle justify-center">
                <MagicalText name='Projects' />
            </div>
            <div className="w-full flex flex-col sm:justify-evenly items-center">
                {ProjectsMap.map((project) => (
                    <Project
                        title={project.title}
                        description={project.description}
                        links={project.links}
                        techStack={project.techStack}
                        key={project.title}
                    />
                ))}
            </div>
        </div>
    );
}

const Project = ({ title, description, links, techStack }:any) => {
    const generateRandomId = () => {
        return Math.random().toString(36).substring(2, 15);
    };

    const buttonVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.1 },
        tap: { scale: 0.9 },
    };

    return (
        <div className="flex flex-col m-2 p-2 justify-center items-center max-w-xl mb-10 mx-5" key={title}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-700  mb-4 text-xl md-text-2xl">{description}</p>
            <div className="flex flex-wrap mb-4">
                {techStack.map((tech:any) => (
                    <motion.div
                        key={generateRandomId()}
                        className="px-2 py-1 bg-red-400 rounded-full text-gray-700 font-semibold mr-2 mb-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {tech}
                    </motion.div>
                ))}
            </div>
            <div className="flex">
                {links.map((link:any) => (
                    <motion.a
                        key={generateRandomId()}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white font-semibold px-4 py-2 rounded-md mr-2"
                        variants={buttonVariants}

                        whileTap="tap"
                    >
                        Source
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

