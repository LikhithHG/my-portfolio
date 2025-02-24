import { FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "../../utils/Constants";

const Projects = () => {
    return (
        <div
            id='projects' 
            className="p-6 md:p-10 bg-gray-900 text-white"
        >
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent mb-6 mt-[-20px] text-center">
                My Works
            </h1>

            <section className = 'grid md:grid-cols-2 mt-10 gap-6'>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.7 }}
                        className="group relative overflow-hidden border-2 transform-style-3d border-black/50 rounded-xl text-white"
                    >
                        <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                        <img
                            className="group-hover:scale-125 transition-all duration-500"
                            src={project.img}
                            alt="projects"
                        />

                        <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                            <span className="text-3xl bg-gradient-to-br from-yellow-400 to-green-600 bg-clip-text text-transparent">
                                {project.title}
                            </span>
                        </div>
                        
            
                        <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                            <a
                                href={project.link}
                                className="text-xl text-white hover:cursor-pointer"
                                target="_blank"
                            >
                                <FaLaptopCode />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </section>
        </div>
    )
}

export default Projects;