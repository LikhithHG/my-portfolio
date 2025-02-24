import LandingPage from './components/LandingPage';
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Navbar from './components/Navbar';
import "./App.css"
import Skills from './pages/Skills/Skills';
import Footer from './components/Footer';

function App() {
  
    return (
        <div className='App'>
            <section className="landingPage-background">
                <Navbar />
                <LandingPage />
            </section>
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    ) 
}

export default App;
