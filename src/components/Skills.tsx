// import ansible from "../../src/assets/icons/ansible.svg"
// import azure from "../../src/assets/icons/azure.svg"
// import cpp from "../../src/assets/icons/cpp.svg"
// import docker from "../../src/assets/icons/docker.svg"
// import linux from "../../src/assets/icons/linx.svg"
// import nodejs from "../../src/assets/icons/nodejs.svg"
// import python from "../../src/assets/icons/python.svg"
// import react from "../../src/assets/icons/react.svg"
// import ubuntu from "../../src/assets/icons/ubunut.svg"

//  buggy file wait for prod
import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillProps {
    skill: string;
}

const Skill= ({ skill }:SkillProps) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const [isVisible, setIsVisible] = useState(false);
    const [isInitialRender, setIsInitialRender] = useState(true);
    const isFirstVisibleRef = useRef(true);

    useEffect(() => {
        if (inView && !isInitialRender) {
            controls.start("visible");
            setIsVisible(true);
        } else {
            controls.start("hidden");
            setIsVisible(false);
        }
    }, [controls, inView, isInitialRender]);

    useEffect(() => {
        setIsInitialRender(false);
    }, []);

    useEffect(() => {
        if (isFirstVisibleRef.current && isVisible) {
            isFirstVisibleRef.current = false;
        }
    }, [isVisible]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial={isInitialRender ? "hidden" : "visible"}
            variants={variants}
            style={{ display: "inline-block", marginRight: "1rem" }}
        >
            {skill}
        </motion.div>
    );
};

interface SkillsProps {
    skills: string[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return (
        <div>
            {skills.map((skill) => (
                <Skill key={skill} skill={skill} />
            ))}
        </div>
    );
};

// export default Skills;
