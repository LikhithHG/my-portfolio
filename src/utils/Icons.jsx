import { FaReact, FaNodeJs, FaPython, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";

export const techIcons = [
  { Component: FaReact, className: "text-blue-400 text-3xl", position: "absolute top-0 left-10" },
  { Component: FaNodeJs, className: "text-green-400 text-3xl", position: "absolute bottom-10 right-10" },
  { Component: SiJavascript, className: "text-yellow-400 text-3xl", position: "absolute top-10 right-0" },
  { Component: SiMongodb, className: "text-green-500 text-3xl", position: "absolute bottom-0 left-10" },
  { Component: FaPython, className: "text-yellow-300 text-3xl", position: "absolute top-5 left-32" },
  { Component: FaGithub, className: "text-gray-300 text-3xl", position: "absolute bottom-5 right-28" },
];