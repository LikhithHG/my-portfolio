import { educationInformation } from "../../utils/Constants";
import { motion } from "framer-motion";

const Education = () => {
    return (
        <div className="py-3 md:py-4">
            <p className="text-xl md:text-2xl font-bold text-white">
                My Academic Journey
            </p>
            <div className="flex flex-col gap-y-4 mt-4">
                {educationInformation.map((education) => {
                    const {university, degree, startYear, endYear, accomplishment, logo} = education;
                    return (
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            key={university}
                            className="flex gap-x-4 group bg-[#b3eb91] rounded-[5px]"
                        >
                            <div className="flex items-center gap-6">
                                <img
                                    src = {logo}
                                    alt = 'university logo'
                                    className="w-28 h-28 object-contain px-1"
                                />
                                <div>
                                    <div className="text-xs font-medium relative -left-3 pt-1">
                                        {endYear}
                                    </div>
                                    <div className="font-semibold text-xl leading-none mb-2 mt-4">
                                        {university}
                                    </div>
                                    <div className="text-sm leading-none mb-4">
                                        {degree}
                                    </div>
                                    <div className="text-sm relative -right-4 font-[Dancing_Script] leading-none mb-4">
                                        {accomplishment}
                                    </div>
                                    <div className="text-xs font-medium relative -left-3 pb-1">
                                        {startYear}
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    )
                })}

            </div>
        </div>
    );
}

export default Education;