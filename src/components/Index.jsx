import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Home from './Home';
import About from "./About";


const Index=()=>{
    return(
        <div>
            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
        </div>
    )
}
export default Index;