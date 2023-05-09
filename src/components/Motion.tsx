import { motion } from "framer-motion";

function App() {
    return (
        <div className=" mt-64">

            {/* 
            </motion.area>  <motion.h1
                animate={{ x: [50, 200, 50], opacity: 1, scale:1}}
                transition={{
                    duration: 1.4,
                    delay: 0.5,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 1.5 }}
                whileHover={{ scale: 1.8 }}
            >
                Animation made easy with Framer Motion
            </motion.h1>

            
            <motion.button whileHover={{ scale: 1.2 }}
                whileTap={{scale:1.5}}
            >
                Hwllo btn
            </motion.button> */}
            <Rotatory />
        </div>
    );
}
export default App;

export function Rotatory() {
    return (
        <>
        </>
    )
}