import { motion } from "framer-motion";
import { skills } from "../../utils/Constants";


const Skills = () => {
    return (
        <section className="py-16 px-6 md:px-20 bg-gray-900 text-white">
            <h1 className="py-8 text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent mb-6 mt-[-20px] text-center">
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
                <div className="grid grid-cols-4 md:grid-cols-5 gap-y-6 gap-x-12 md:gap-x-16 md:gap-y-8 items-center my-8 md:my-6">
                    {skills.map((skill, index) => (
                        <div 
                            key={skill.title} 
                            className="group relative flex flex-col items-center justify-center w-20 h-20 p-4 transition-transform hover:scale-110" 
                        >
                            <img 
                                src={skill.image}
                                alt={skill.title}
                                className="object-cover group-hover:scale-110 transition"
                            />

                            {/* Name */}
                            <span className="mt-2 text-xs font-medium">{skill.title}</span>

                            {/* Hover Effect - Show Level */}
                            <span className="text-xs text-[#b3eb91] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                                {skill.level}
                            </span>
                        </div>
                    ))}
                </div>      
            </div>

        </section>
    )
}

export default Skills;