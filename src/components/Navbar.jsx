import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-lg shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-white text-2xl font-semibold">
                    <Link to="/">Likhith</Link>
                </h1>
                <div className="hidden md:flex space-x-8">
                    <Link 
                        to="/about" 
                        className="text-white hover:text-blue-400"
                    >
                        About
                    </Link>
                    <Link 
                        to="/experience" 
                        className="text-white hover:text-blue-400"
                    >
                        Experience
                    </Link>
                    <Link 
                        to="/projects" 
                        className="text-white hover:text-blue-400"
                    >
                        Projects
                    </Link>
                    <Link 
                        to="/contact" 
                        className="text-white hover:text-blue-400"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;