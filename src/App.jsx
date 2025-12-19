import React from "react";
import Navigation from "./components/Navigation";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
import { useScrollToTop } from "./hooks/useScrollToTop";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Conntact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
    const hasAnimated = useIntersectionObserver();
    const showScrollTop = useScrollToTop();
    
    return (
        <div className="min-h-screen bg-white text-black">
            <Navigation />
            <Hero hasAnimated={hasAnimated}/>
            <About hasAnimated={hasAnimated}/>
            <Projects hasAnimated={hasAnimated}/>
            <Skills hasAnimated={hasAnimated}/> 
            <Conntact hasAnimated={hasAnimated}/>
            <Footer /> 
            <scrollToTop showScrollTop={showScrollTop} />

        </div>
    );
};

export default App;