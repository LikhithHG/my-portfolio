import {motion} from "framer-motion";
import { useState, useEffect } from "react";
//import { TypeAnimation } from "react-type-animation";
import { greetings } from "../utils/Constants";

const LandingPage = () => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        }, 3000); // Change greeting every 3 seconds

        return () => clearInterval(interval); // this will Cleanup on unmount
    }, []);

    return (
        <div className="landing-page h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center px-6">
            {/**Animated Heading  Installed Framer Motion "npm install framer-motion"*/}
            <motion.h1 
                 key={index} // Ensures animation restarts for each new greeting
                 initial={{ opacity: 0, y: -10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: 10, scale: 0.9 }}
                 transition={{ duration: 0.8 }} // Smooth fade transition
                 className={`text-5xl font-bold transition-all duration-300 ease-in-out cursor-pointer ${greetings[index].color} ${greetings[index].glow}`} // Dynamic color
            >
                {greetings[index].text}
            </motion.h1>
            <h1 className="text-5xl font-bold">
                I am Likhith
            </h1>

            <h2 
                className="text-2xl mt-3"
            >
                Front End Developer
            </h2>
        </div>
    )
}

export default LandingPage;