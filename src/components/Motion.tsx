import { AnimatePresence, motion } from "framer-motion";

let letters = Array.from("");

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

export const MagicalText = ({ name }: { name: string }) => {
    letters=Array.from(name);
    return (
        <AnimatePresence>
            <motion.h1
                className={`hle`}
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
};