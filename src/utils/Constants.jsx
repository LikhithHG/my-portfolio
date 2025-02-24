import { FaGithub, FaHandsPraying, FaLinkedin } from "react-icons/fa6";
import { FaRegHandshake, FaOm } from "react-icons/fa";
import { GiShintoShrine } from "react-icons/gi";
import { SiLeetcode, } from "react-icons/si";
import about from "../assets/about.jpeg";
import aws from "../assets/aws.png";
import cerner from "../assets/cerner.png";
import cernerOffer from "../assets/CernerOffer.jpg";
import computerNetwork from "../assets/computernetwork.png";
import css from "../assets/css.svg";
import cubical from "../assets/cubical.jpg";
import cudenver from "../assets/cudenver.png";
import cyberSecurity from "../assets/cybersecurity.png";
import daveOgle from "../assets/DaveOgle.jpg";
import ganeshSamiti from "../assets/ganeshSamiti.png";
import git from "../assets/git.svg";
import html5 from "../assets/html5.svg";
import internshipDinner from "../assets/Internship Dinner.jpg";
import internship1 from "../assets/Internship1.jpg";
import java from "../assets/java.png";
import javascript from "../assets/javascript.svg";
import mongodb from "../assets/mongodb.svg";
import myportfolio from "../assets/myPortFolio.png";
import mysql from "../assets/mysql.png";
import nextjs from "../assets/nextjs.png";
import nodejs from "../assets/nodejs.svg";
import office from "../assets/Office.jpg";
import oops from "../assets/oops.png";
import oracleCerner from "../assets/oraclecerner.png";
import python from "../assets/python.svg";
import react from "../assets/react.svg";
import reactNative from "../assets/reactNative.png";
import redux from "../assets/redux.svg";
import sdlc from "../assets/sdlc.png";
import sit from "../assets/sit.png";
import taClass1 from "../assets/TA Class 1.jpg";
import taClass2 from "../assets/TA Class 2.jpg";
import taClass3 from "../assets/TA Class 3.jpg";
import tailwindcss from "../assets/tailwindcss.svg";
import typescript from "../assets/typescript.svg";

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
        logo: cudenver,
    },
    {
        university: "Siddaganga Institute of Technology",
        degree: "B.E Information Science and Engineering",
        startYear: "Aug 2016 ",
        endYear: "May 2020",
        accomplishment: "Gold Medalist for highest GPA",
        logo: sit,
    },
];

export const skills = [
    { title: 'JavaScript', level: 'Advanced', image: javascript },
    { title: 'React.JS', level: 'Advanced', image: react },
    { title: 'Node.JS', level: 'Intermediate', image: nodejs },
    { title: 'Python', level: 'Intermediate', image: python },
    { title: 'Java', level: 'Good', image: java },
    { title: 'TypeScript', level: 'Intermediate', image: typescript },
    { title: 'HTML', level: 'Advanced', image: html5 },
    { title: 'CSS', level: 'Intermediate', image: css },
    { title: 'TailwindCSS', level: 'Intermediate', image: tailwindcss },
    { title: 'ReactRedux', level: 'Intermediate', image: redux },
    { title: 'ReactNative', level: 'Intermediate', image: reactNative },
    { title: 'NextJS', level: 'Intermediate', image: nextjs },
    { title: 'MySQL', level: 'Intermediate', image: mysql },
    { title: 'MongoDB', level: 'Intermediate', image: mongodb },
    { title: 'Git', level: 'Advanced', image: git },
    { title: 'OOPs', level: 'Advanced', image: oops },
    { title: 'Computer Network', level: 'Advanced', image: computerNetwork },
    { title: 'CyberSecurity', level: 'Intermediate', image: cyberSecurity },
    { title: 'AWS', level: 'Intermediate', image: aws },
    { title: 'SDLC', level: 'Intermediate', image: sdlc }, 
];

export const experience = [
    {
        title: "Teaching Assistant",
        company: "University of Colorado Denver",
        logo: cudenver,
        duration: "Jan 2024 - Present",
        description: "Mentored students, graded assignments, and conducted tutorial sessions under Prof. Dave Ogle.",
        galleryLink: "/gallery",
    },
    {
        title: "Network Software Engineer",
        company: "Oracle Cerner",
        logo: oracleCerner,
        duration: "Jun 2020 - Jul 2023",
        description: "Developed and optimized software and network automation solutions for healthcare applications.",
        galleryLink: "/gallery",
    },
    {
        title: "Software - System Intern",
        company: "Cerner",
        logo: cerner,
        duration: "Jan 2020 - Jun 2020",
        description: "Worked on real-time data analytics for healthcare applications, improving data processing speeds.",
        galleryLink: "/gallery",
    },
];

export const galleryImages = [
    {
        id: 1,
        category: "Teaching Assistant",
        src: daveOgle,
        alt: "Image"
    },
    {
        id: 2,
        category: "Teaching Assistant",
        src: taClass1,
        alt: "Image"
    },
    {
        id: 3,
        category: "Teaching Assistant",
        src: taClass2,
        alt: "Image"
    },
    {
        id: 4,
        category: "Teaching Assistant",
        src: taClass3,
        alt: "Image"
    },
    {
        id: 5,
        category: "Network Software Engineer",
        src: office,
        alt: "Network Engineer 2"
    },
    {
        id: 6,
        category: "Network Software Engineer",
        src: cubical,
        alt: "Network Engineer 2"
    },
    {
        id: 7,
        category: "Internship",
        src: cernerOffer,
        alt: "Internship"
    },
    {
        id: 8,
        category: "Internship",
        src: internshipDinner,
        alt: "Internship"
    },
    {
        id: 9,
        category: "Internship",
        src: internship1,
        alt: "Internship"
    },
];