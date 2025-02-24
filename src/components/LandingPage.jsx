import {motion} from "framer-motion";
import { useState, useEffect } from "react";
import { greetings } from "../utils/Constants";
import { technicalEcoSystems } from "../utils/Constants";

const LandingPage = () => {

    const [index, setIndex] = useState(0);
    const [firstTime, setFirstTime] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        }, 3000); // Change greeting every 3 seconds

        return () => clearInterval(interval); // this will Cleanup on unmount
    }, []);

    useEffect(() => {
        if(!firstTime)
            setFirstTime(true);
    }, []); //Runs only for first time

    return (
        <div 
            id='landing-page'
            className="h-screen flex flex-col items-start justify-center text-center md:ml-32 px-6"
        >
            {/**Animated Heading  Installed Framer Motion "npm install framer-motion"*/}
            <motion.div
                key={index} // Ensures animation restarts for each new greeting
                initial={firstTime ? {} : { opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }} 
                className="transition-all duration-300 ease-in-out cursor-pointer"
            >
                <div
                    className="md:text-3xl text-gray-200 font-[Pacifico] font-semibold flex items-center gap-2"
                >
                    {greetings[index].icon}
                    <span>{greetings[index].text}</span>
                </div>
                
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="mt-4"
            >
                <h1 className="text-xl md:text-5xl font-semibold  font-[Noto_Serif] tracking-wider md:mb-4 bg-gradient-to-br from-[#FFD700] to-[#20B2AA] bg-clip-text text-transparent">
                    <span className="md:text-3xl text-lg text-gray-200">I'm</span> Likhith Murthy
                </h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="mt-4"
            >
                <p className="md:text-2xl text-lg text-gray-200 font-semibold  font-[Noto_Serif]">
                    Software Developer driven by curiosity, innovation, and problem-solving
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }} 
                className="flex transition-all duration-300 ease-in-out mt-2 gap-2 md:mt-6 md:gap-8 items-center"
            >
                {technicalEcoSystems.map((technicalEcoSystem) => (
                    <motion.a
                        key={technicalEcoSystem.title}
                        initial="hidden"
                        whileInView={"show"}
                        whileHover={{scale: 1.2}}
                        viewport={{ once: true, amount: 0.7 }}
                        href={technicalEcoSystem.url}
                        title={technicalEcoSystem.title}
                        target="_blank" //Opens in New Tab
                        rel="noopener noreferrer" //Prevents security issues
                        className="cursor-pointer"
                    >
                        <technicalEcoSystem.icon className={`h-3 w-3 md:h-7 md:w-7 ${technicalEcoSystem.color}`}/>
                    </motion.a>
                ))}
            </motion.div>
        </div>
    )
}

export default LandingPage;