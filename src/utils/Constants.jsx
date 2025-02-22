import { FaGithub, FaHandsPraying, FaLinkedin } from "react-icons/fa6";
import { FaRegHandshake, FaOm, FaJs, FaReact,  FaExchangeAlt, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3, FaBootstrap, FaGitAlt, FaDocker, FaAws, FaSyncAlt, FaProjectDiagram, FaWater } from "react-icons/fa";
import { GiShintoShrine } from "react-icons/gi";
import { SiLeetcode, SiTailwindcss, SiRedux, SiMongodb, SiMysql, SiNginx, SiTypescript } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { TbTopologyComplex, TbTopologyFullHierarchy } from "react-icons/tb";

export const greetings = [
    { text: "Hello", icon: <FaRegHandshake className="text-blue-500" /> },
    { text: "Namaste,", icon: <FaHandsPraying className="text-yellow-500" /> },
    { text: "Om Shiva,", icon: <FaOm className="text-red-500" /> },
    { text: "Hola,", icon: <GiShintoShrine className="text-green-500" /> },
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
];

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

export const skills = [
    { title: 'JavaScript', level: 'Advanced', icon: <FaJs /> },
    { title: 'React.JS', level: 'Advanced', icon: <FaReact /> },
    { title: 'Node.JS', level: 'Intermediate', icon: <FaNodeJs /> },
    { title: 'Python', level: 'Intermediate', icon: <FaPython /> },
    { title: 'Java', level: 'Good', icon: <FaJava /> },
    { title: 'TypeScript', level: 'Intermediate', icon: <SiTypescript /> },
    { title: 'HTML', level: 'Advanced', icon: <FaHtml5 /> },
    { title: 'CSS', level: 'Intermediate', icon: <FaCss3 /> },
    { title: 'Bootstrap', level: 'Intermediate', icon: <FaBootstrap /> },
    { title: 'TailwindCSS', level: 'Intermediate', icon: <SiTailwindcss /> },
    { title: 'JSON', level: 'Intermediate', icon: <VscJson /> },
    { title: 'React-Redux', level: 'Intermediate', icon: <SiRedux /> },
    { title: 'REST API', level: 'Advanced', icon: <FaExchangeAlt /> }, // Fixed icon
    { title: 'NoSQL', level: 'Intermediate', icon: <SiMongodb /> },
    { title: 'MySQL', level: 'Intermediate', icon: <SiMysql /> },
    { title: 'MongoDB', level: 'Intermediate', icon: <SiMongodb /> },
    { title: 'Git', level: 'Advanced', icon: <FaGitAlt /> },
    { title: 'GitHub', level: 'Advanced', icon: <FaGithub /> },
    { title: 'OOPs', level: 'Advanced', icon: <TbTopologyFullHierarchy /> },
    { title: 'Computer Network', level: 'Advanced', icon: <TbTopologyComplex /> },
    { title: 'Distributed Computing', level: 'Basic', icon: <TbTopologyComplex /> },
    { title: 'Nmap', level: 'Intermediate', icon: <TbTopologyComplex /> },
    { title: 'NS2', level: 'Intermediate', icon: <SiNginx /> },
    { title: 'NetworkX', level: 'Intermediate', icon: <TbTopologyComplex /> },
    { title: 'Cyber-security', level: 'Intermediate', icon: <FaExchangeAlt /> },
    { title: 'AWS', level: 'Intermediate', icon: <FaAws /> },
    { title: 'Docker', level: 'Intermediate', icon: <FaDocker /> },
    { title: 'SDLC', level: 'Intermediate', icon: <FaSyncAlt /> }, // Fixed icon
    { title: 'Agile', level: 'Advanced', icon: <FaProjectDiagram /> }, // Fixed icon
    { title: 'Waterfall', level: 'Intermediate', icon: <FaWater /> } // Fixed icon
];
