import { RiHome2Line } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { CiBookmarkPlus } from "react-icons/ci";


const NavBar = () => {
    return ( 
        <div className="flex flex-col md:flex-row gap-[50px] md:justify-around h-dvh md:h-[12%] px-3 md:w-full   md:mx-auto">
            <div className="md:forLogo forLogoMob">
                
            </div>
            <div className="flex flex-col md:flex-row">
                <a href="/">
                    <div>
                        <RiHome2Line />
                        <div>Home</div>
                    </div>
                </a>
                <a href="/favorite">
                    <div>
                        <CiStar />
                        <div>Favorite</div>
                    </div>
                </a>
                <a href="/about">
                    <div>
                        <CiBookmarkPlus />
                        <div>About</div>
                    </div>
                </a>
            </div>
        </div>
     );
}

export default NavBar;