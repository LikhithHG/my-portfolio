import { FaGithub, FaHandsPraying, FaLinkedin } from "react-icons/fa6";
import { FaRegHandshake, FaOm } from "react-icons/fa";
import { GiShintoShrine } from "react-icons/gi";
import { SiLeetcode, } from "react-icons/si";
import myportfolio from "../assets/myPortFolio.png";
import ganeshSamiti from "../assets/ganeshSamiti.png";


export const greetings = [
    { text: "Hello", icon: <FaRegHandshake className="text-blue-500" /> },
    { text: "Namaste,", icon: <FaHandsPraying className="text-yellow-500" /> },
    { text: "Om Shiva,", icon: <FaOm className="text-red-500" /> },
    { text: "Hola,", icon: <GiShintoShrine className="text-green-500" /> },
];

export const technicalEcoSystems = [
    {
        title: "linkedin",
        icon: FaLinkedin,
        url: "https://www.linkedin.com/in/likhithhg",
        color: "text-blue-500",
    },
    {
        title: "github",
        icon: FaGithub,
        url: "https://github.com/LikhithHG",
        color: "text-white", // White for GitHub
    },
    {
        title: "leetcode",
        icon: SiLeetcode,
        url: "https://leetcode.com/u/Likhith2006/",
        color: "text-yellow-500", // LeetCode Yellow
    },
];

export const projects = [
    {
      title: "Likhith's Portfolio",
      img: myportfolio,
      link: "https://github.com/LikhithHG/my-portfolio",
    },
    {
      title: "Indian Festival Website",
      img: ganeshSamiti,
      link: "https://github.com/LikhithHG/Ganesha",
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
    { title: 'JavaScript', level: 'Advanced', image: 'src/assets/logo/javascript.svg' },
    { title: 'React.JS', level: 'Advanced', image: 'src/assets/logo/react.svg' },
    { title: 'Node.JS', level: 'Intermediate', image: 'src/assets/logo/nodejs.svg' },
    { title: 'Python', level: 'Intermediate', image: 'src/assets/logo/python.svg' },
    { title: 'Java', level: 'Good', image: 'src/assets/logo/java.png' },
    { title: 'TypeScript', level: 'Intermediate', image: 'src/assets/logo/typescript.svg' },
    { title: 'HTML', level: 'Advanced', image: 'src/assets/logo/html5.svg' },
    { title: 'CSS', level: 'Intermediate', image: 'src/assets/logo/css.svg' },
    { title: 'TailwindCSS', level: 'Intermediate', image: 'src/assets/logo/tailwindcss.svg' },
    { title: 'ReactRedux', level: 'Intermediate', image: 'src/assets/logo/redux.svg' },
    { title: 'ReactNative', level: 'Intermediate', image: 'src/assets/logo/reactNative.png' },
    { title: 'NextJS', level: 'Intermediate', image: 'src/assets/logo/nextjs.png' },
    { title: 'MySQL', level: 'Intermediate', image: 'src/assets/logo/mysql.png' },
    { title: 'MongoDB', level: 'Intermediate', image: 'src/assets/logo/mongodb.svg' },
    { title: 'Git', level: 'Advanced', image: 'src/assets/logo/git.svg' },
    { title: 'OOPs', level: 'Advanced', image: 'src/assets/logo/oops.png' },
    { title: 'Computer Network', level: 'Advanced', image: 'src/assets/logo/computernetwork.png' },
    { title: 'CyberSecurity', level: 'Intermediate', image: 'src/assets/logo/cybersecurity.png' },
    { title: 'AWS', level: 'Intermediate', image: 'src/assets/logo/aws.png' },
    { title: 'SDLC', level: 'Intermediate', image: 'src/assets/logo/sdlc.png' }, 
];

export const experience = [
    {
        title: "Teaching Assistant",
        company: "University of Colorado Denver",
        logo: "src/assets/logo/cudenver.png",
        duration: "Jan 2024 - Present",
        description: "Mentored students, graded assignments, and conducted tutorial sessions under Prof. Dave Ogle.",
        galleryLink: "/gallery",
    },
    {
        title: "Network Software Engineer",
        company: "Oracle Cerner",
        logo: "src/assets/logo/oraclecerner.png",
        duration: "Jun 2020 - Jul 2023",
        description: "Developed and optimized software and network automation solutions for healthcare applications.",
        galleryLink: "/gallery",
    },
    {
        title: "Software - System Intern",
        company: "Cerner",
        logo: "src/assets/logo/cerner.png",
        duration: "Jan 2020 - Jun 2020",
        description: "Worked on real-time data analytics for healthcare applications, improving data processing speeds.",
        galleryLink: "/gallery",
    },
];

export const galleryImages = [
    {
        id: 1,
        category: "Teaching Assistant",
        src: "/src/assets/gallery/DaveOgle.jpg",
        alt: "Image"
    },
    {
        id: 2,
        category: "Teaching Assistant",
        src: "/src/assets/gallery/TA Class 1.jpg",
        alt: "Image"
    },
    {
        id: 3,
        category: "Teaching Assistant",
        src: "/src/assets/gallery/TA Class 2.jpg",
        alt: "Image"
    },
    {
        id: 4,
        category: "Teaching Assistant",
        src: "/src/assets/gallery/TA Class 3.jpg",
        alt: "Image"
    },
    {
        id: 5,
        category: "Network Software Engineer",
        src: "/src/assets/gallery/Office.jpg",
        alt: "Network Engineer 2"
    },
    {
        id: 6,
        category: "Network Software Engineer",
        src: "/src/assets/gallery/cubical.jpg",
        alt: "Network Engineer 2"
    },
    {
        id: 7,
        category: "Internship",
        src: "/src/assets/gallery/CernerOffer.jpg",
        alt: "Internship"
    },
    {
        id: 8,
        category: "Internship",
        src: "/src/assets/gallery/Internship Dinner.jpg",
        alt: "Internship"
    },
    {
        id: 9,
        category: "Internship",
        src: "/src/assets/gallery/Internship1.jpg",
        alt: "Internship"
    },
];