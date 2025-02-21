import { FaGithub, FaHandsPraying, FaLinkedin } from "react-icons/fa6";
import { FaRegHandshake, FaOm } from "react-icons/fa";
import { GiShintoShrine } from "react-icons/gi";
import { SiLeetcode } from "react-icons/si";

export const greetings = [
    { 
        text: "Hello", 
        icon: <FaRegHandshake className="text-blue-500" />, 
    },
    { 
        text: "Namaste,", 
        icon: <FaHandsPraying className="text-yellow-500" />, 
    },
    { 
        text: "Om Shiva,", 
        icon: <FaOm className="text-red-500" />, 
    },
    { 
        text: "Hola,", 
        icon: <GiShintoShrine className="text-green-500" />, 
    },
];

export const socialMediaLinks = [
    {
        name: "linkedin",
        icon: FaLinkedin,
        url: "https://www.linkedin.com/in/likhithhg",
        color: "text-blue-500",
    },
    {
        name: "github",
        icon: FaGithub,
        url: "https://github.com/LikhithHG",
        color: "text-white", // White for GitHub
    },
    {
        name: "leetcode",
        icon: SiLeetcode,
        url: "https://leetcode.com/u/Likhith2006/",
        color: "text-yellow-500", // LeetCode Yellow
    },
]

export const educationInformation = [
    {
        university: "University of Colorado Denver",
        degree: "MS Computer Science",
        startYear: "Aug  2023",
        endYear: "May 2025",
        accomplishment: "Teaching Assistant under Prof. David Ogle",
        logo: "/src/assets/logo/cudenver.png",
    },
    {
        university: "Siddaganga Institute of Technology",
        degree: "B.E Information Science and Engineering",
        startYear: "Aug 2016 ",
        endYear: "May 2020",
        accomplishment: "Gold Medalist for highest GPA",
        logo: "/src/assets/logo/sit.png",
    },
];