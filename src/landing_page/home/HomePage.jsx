import Footer from "../../Footer";
import OpenAccount from "../../OpenAccount";
import Awards from "./Awards";
import Education from "./Education";
import Home from "./Home";
import Navabar from "./Navbar";
import Pricing from "./Pricing";
import Stats from "./Stats";



export default function HomePage() {
    return <div>
       
       
       
        <Home/>
        <Awards /> 
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount/>
     
    </div>
}