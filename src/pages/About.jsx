import AboutComp from "../components/AboutComp";
import NavBar from "../components/NavBar";

const About = () => {
    return ( 
        <div className='flex flex-row md:flex-col'>
            <NavBar />
            <AboutComp/>
        </div>
     );
}
 
export default About;