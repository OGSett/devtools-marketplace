import { RiHome2Line } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { CiBookmarkPlus } from "react-icons/ci";


const NavBar = () => {
    return ( 
        
        <div className=" flex items-center  flex-col md:flex-row gap-[50px] md:justify-around    md:h-[10%]  p-3 md:w-full  shadow-teal-600 bg-gradient-to-r from-gray-100 via-gray-400 to-gray-800">
            <div className="md:forLogo forLogoMob">
                
            </div>
            <div className="flex flex-col md:flex-row items-center md:gap-6">
                <a href="/">
                    <div className="flex items-center my-1 flex-col w-full md:flex-row md:justify-center md:items-center gap-2">
                        <RiHome2Line />
                        <div>Home</div>
                    </div>
                </a>
                <a href="/favorite">
                    <div className="flex items-center my-1 flex-col w-full md:flex-row md:justify-center md:items-center gap-2">
                        <CiStar />
                        <div>Favorite</div>
                    </div>
                </a>
                <a href="/about">
                    <div className="flex items-center my-1 flex-col w-full md:flex-row md:justify-center md:items-center gap-2">
                        <CiBookmarkPlus />
                        <div>About</div>
                    </div>
                </a>
            </div>
        </div>
     );
}

export default NavBar;