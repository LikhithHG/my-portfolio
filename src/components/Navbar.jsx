import { Link } from "react-scroll";
import { navigationLinks } from "../utils/Route";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full backdrop-blur z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-yellow-400 text-2xl font-semibold font-[Dancing_Script]">
                    <Link 
                        to="landing-page"
                        smooth={true} 
                        duration={500}
                        className="tracking-widest hover:cursor-pointer"
                    >
                        Likhith Murthy
                    </Link>
                </h1>
                <ul className="hidden lg:flex lg:items-center gap-16">
                    {navigationLinks.map((navigationLink) => {
                        const {title, to, Icon} = navigationLink;
                        return (
                            <li key = {to}>
                                <Link
                                    to={to}
                                    smooth={true} 
                                    duration={500}
                                    className="text-white hover:text-yellow-200 flex gap-2 hover:cursor-pointer"
                                >
                                    <Icon size = {20} />
                                    {title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;