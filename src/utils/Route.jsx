import { FaCode, FaUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdWork } from "react-icons/md";

export const navigationLinks = [
    {
        title: 'ABOUT',
        to: 'about',
        Icon: FaUser,
    },
    {
        title: 'EXPERIENCE',
        to: 'experience',
        Icon: MdWork,
    },
    {
        title: 'PROJECTS',
        to: 'projects',
        Icon: FaCode,
    },
    {
        title: 'CONTACT',
        to: 'contact',
        Icon: HiOutlineMail,
    },
]