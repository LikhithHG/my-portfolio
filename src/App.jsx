import LandingPage from './components/LandingPage';
import Layout from "./components/Layout";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { 
                path: "/", 
                element: <LandingPage /> 
            },
            { 
                path: "/about", 
                element: <About /> 
            },
            { 
                path: "/experience", 
                element: <Experience /> 
            },
            { 
                path: "/projects", 
                element: <Projects /> 
            },
            { 
                path: "/contact", 
                element: <Contact /> 
            },
        ]
    },
])

function App() {
  
    return (
        <RouterProvider router = {appRouter} />
    ) 
}

export default App;
