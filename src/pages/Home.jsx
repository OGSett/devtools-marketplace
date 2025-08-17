import Footer from "../components/Footer";
import HomeComp from "../components/HomeComponents";
import NavBar from "../components/NavBar";


const Home = () => {
    return ( <div className='flex flex-row md:flex-col md:h-screen relative'>
      <NavBar />
      <div className="flex flex-col w-full md:h-[88%] relative bg-gray-200 justify-between">
        <HomeComp />
        <div className=" ">
          <Footer />
        </div>
      </div>
    </div> );
}
 
export default Home;