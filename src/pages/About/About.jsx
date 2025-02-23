import { motion } from "framer-motion";
import { useState } from "react";
import BasicInfo from "./BasicInfo";
import Education from "./Education";
import signature from '/src/assets/gif/signature.gif'

const About = () => {

  const [activeTab, setActiveTab] = useState('BasicInfo')

  //Variable for the floating animations
  const floatingIcons = {
    animate: {
        x: [0, Math.random() * 50 - 25, Math.random() * -50 + 25, 0],
        y: [0, Math.random() * 50 - 25, Math.random() * -50 + 25, 0],
        rotate: [0, 360],
        transition: {
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id = 'about'
      className = 'h-screen py-16 px-6 md:px-20 bg-gray-900'
    >
      <div className="flex flex-col justify-center items-center py-10">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent mb-6 mt-[-20px]">
          About me
        </h1>
      </div>
      <div className="mx-auto flex flex-col md:flex-row items-center gap-50">
        {/** Left side profile photo and skills floating around the photo */}
        <div className = 'relative w-full md:w-1/3 flex justify-center'>
          <motion.img
            src = '/src/assets/about.jpeg'
            alt = 'Likhith Murthy'
            className="w-60 h-60 md:w-96 md:h-96 rounded-full object-cover shadow-lg border-4 border-gray-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          {/* Signature Video Section */}
          <div className="flex justify-end mt-6">
              <img 
                src={signature} 
                alt="Signature" 
                className="w-40 md:w-60 h-auto absolute bottom-2 right-2"
              />
            </div>
        </div>

        {/**Right Side of the about has content and tabs */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left flex flex-col w-2xl min-h-[350px]"
        >
          {/* Tabs Navigation */}
          <div className="flex justify-center md:justify-center gap-6 mb-1">
            <button 
              className={`py-2 px-4 rounded-md cursor-pointer ${activeTab === "BasicInfo" ? "bg-green-400 text-gray-900" : "bg-gray-700 text-gray-300"}`}
              onClick={() => setActiveTab("BasicInfo")}
            >
              Basic Info
            </button>
            <button 
              className={`py-2 px-4 rounded-md cursor-pointer ${activeTab === "Education" ? "bg-green-400 text-gray-900" : "bg-gray-700 text-gray-300"}`}
              onClick={() => setActiveTab("Education")}
            >
              Education
            </button>
          </div>
          {/* Tab Content */}
          <div className="p-6 min-h-[250px] flex flex-col">
            {activeTab === 'BasicInfo' && <BasicInfo />}
            {activeTab === 'Education' && <Education />}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About;