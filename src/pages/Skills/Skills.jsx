import { motion } from "framer-motion";
import { useState } from "react";
import { skills } from "../../utils/Constants";


const Skills = () => {
    return (
        <section className="py-16 px-6 md:px-20 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 text-white">
            <h1 className="py-10 text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent mb-6 mt-[-20px] tracking-wider text-center">
                Skills
            </h1>
            <div className="flex flex-col justify-evenly md:flex-row gap-4 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-2xl md:text-left md:text-4xl font-bold font-notoSerif justify-start">
                        I have the experience.<br />
                        Here’s my skillset for success.
                    </h2>
                </motion.div>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-y-6 gap-x-12 md:gap-x-16 md:gap-y-8 items-center my-12 md:my-12">
                    {skills.map((skill, index) => (
                        <div 
                            key={skill.title} 
                            className="group relative flex flex-col items-center justify-center w-20 h-20 p-4 bg-gray-600 rounded-lg transition-transform hover:scale-110" 
                        >
                            <span className="">{skill.icon}</span>

                            {/* Name */}
                            <span className="mt-2 text-xs font-medium">{skill.title}</span>

                            {/* Hover Effect - Show Level */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#b3eb91] bg-opacity-90 text-gray-600 font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-120 rounded-lg">
                                <span className="text-sm font-bold">{skill.title}</span>
                                <span className="text-xs">{skill.level}</span>
                            </div>
                        </div>
                    ))}
                </div>      
            </div>

        </section>
    )
}

export default Skills;