import Footer from "../components/Footer";
import HomeComp from "../components/HomeComponents";
import NavBar from "../components/NavBar";
import Heading from "../components/subComponents/Heading";


const Home = () => {
    return ( <div className='flex flex-row md:flex-col md:h-screen relative'>
      <NavBar />
      <div className="flex flex-col w-full md:h-full relative bg-gray-200 justify-between">
        <Heading/>
        <HomeComp />
        <div className=" ">
          <Footer />
        </div>
      </div>
    </div> );
}
 
export default Home;