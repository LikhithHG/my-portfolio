import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {

    return (
        <div 
            id='contact'
            className="p-6 md:p-10 mt -12 flex flex-col bg-gray-900 text-white"
        >
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent mb-6 mt-[-20px] text-center">
                Let's Connect
            </h1>
            <section className="flex flex-col md:flex-row gap-4 md:gap-24 mt-10 md:px-24">
                <div className="basis-2/5">
                    <div className="text-2xl font-bold  mb-6">Let's Work Together</div>
                    <p>
                        Feel free to drop a message, let's collaborate and create something amazing together!
                    </p>
                    <div className="flex flex-col gap-4 mt-6">
                        <div className="flex items-center gap-2">
                            {" "}
                            <MdEmail />
                            <div>likhithhalkurke98@gmail.com</div>
                        </div>
                        <div className="flex items-center gap-2">
                            {" "}
                            <IoCall />
                            <div>+1 720-251-5128</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaLocationDot /> <div>Denver, Colorado, United States</div>
                        </div>
                    </div>
                </div>
                <div className="basis-3/5">
                    <img 
                        src = '/src/assets/contactme.png'
                        alt = 'Contact Me Logo'
                    />
                    
                </div>
            </section>
        </div>
    )
}

export default Contact;