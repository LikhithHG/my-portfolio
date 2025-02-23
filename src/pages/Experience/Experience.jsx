import { useState } from "react";
import { experience } from "../../utils/Constants";
//import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaImages } from "react-icons/fa"; 

const Experience = () => {

    //const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div 
            id='experience'
            className="py-16 px-6 md:px-20 items-center justify-center bg-gray-900 text-white"
        >
            <h1 
                className="py-8 text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent mb-6 mt-[-20px] text-center"
            >
                My Experience
            </h1>
            <div
                className="flex flex-col md:flex-row justify-center items-start md-items-center"
            >
                {experience.map((exp, index) => (
                    <motion.div
                        key = {exp.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`relative m-2 p-1 flex flex-col items-center md:items-start md:flex-row w-full md:w-1/3 mb-10 md:mb-0 transition-transform
                            ${index === hoveredIndex ? 'scale-105 shadow-lg' : 'scale-100'}`
                        }
                    >

                        {/**Stepper Circle with logo */}
                        <div className="">
                            <img 
                                src={exp.logo}
                                alt={exp.company}
                                className="w-25 h-25 object-contain"
                            />
                        </div>

                        {/** Experience card with hover effect */}
                        <div className="mt-4 md:ml-6 p-6 bg-gray-800 rounded-lg shaddow-lg text-center md:text-left">
                            <h3 className="text-xl font-semibold text-amber-300">{exp.title}</h3>
                            <h4 className="text-md text-gray-300">{exp.company}</h4>
                            <p className="text-sm">{exp.duration}</p>
                            <p className="mt-2 text-justify">{exp.description}</p>
                            <motion.button
                                //onClick={() => navigate(exp.galleryLink)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="absolute top-4 right-1 p-2 m-4 rounded-full bg-gray-700 hover:bg-gray-600 transition"
                            >
                                <FaImages className="w-6 h-6 text-yellow-400 hover:text-yellow-500" />
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Experience;