import { motion } from 'framer-motion';
import { MagicalText } from './Motion';

const projectsOne = {
    title: "Student Peformance Tracking System",
    description: "Web application which is primarily used by the professors and students. I created this projectas my final year project. Implemented data visualization using Chart.js",
    links: ["https://github.com/lakshmanshankarc/student-performance-tracking"],
    techStack: ["Nextjs", "MySQL", "React"]
}
const projectsTwo = {
    title: "find Blood Donor Application",
    description: "The app features a beautiful and easy-to-use UI with Butter Flow and Vite Daisy UI frame-works, providing a seamless user experience.",
    links: ["https://github.com/lakshmanshankarc/find-blood-donor"],
    techStack: ["React", "MySQL", "Vite"]
}
// const projectsThree = {
//     title: "Project 3",
//     description: "This is a project",
//     links: ["https://github.om", "daksld"],
//     techStack: ["React", "Tailwind", "Framer Motion"]
// }
export default function Pro() {
    const ProjectsMap = [projectsOne, projectsTwo]
    return <div className='bg-gradient-to-r from-red-100 to-amber-100 my-4'>
        <div className=" text-4xl text-orange-600 mx-2 p-3 my-5 py-2 font-ubuntu md:text-6xl lg:text-6xl">
            <MagicalText name='Projects' />
        </div>
        {
            ProjectsMap.map((project) => (
                <Project
                    title={project.title}
                    description={project.description}
                    links={project.links}
                    techStack={project.techStack}
                    key={project.title}
                />
            ))
        }
    </div>

}



const Project = ({ title, description, links, techStack }: { title: string, description: string, links: Array<string>, techStack: any }) => {
    const buttonVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.1 },
        tap: { scale: 0.9 },
    };

    return (
        <div className="flex flex-col m-2 p-2 justify-center items-center max-w-xl mb-10 mx-5">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-700 text-lg mb-4">{description}</p>
            <div className="flex flex-wrap mb-4">
                {techStack.map((tech: any) => (
                    <motion.div
                        key={tech}
                        className="px-2 py-1 bg-red-400 rounded-full text-gray-700 font-semibold mr-2 mb-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {tech}
                    </motion.div>
                ))}
            </div>
            <div className="flex">
                {/* @ts-ignore */}
                {links.map((link: any) => (
                    <motion.a
                        key={link.text}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white font-semibold px-4 py-2 rounded-md mr-2"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <a href={link}>Source</a>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};
