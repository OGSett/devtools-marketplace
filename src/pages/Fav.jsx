import FavComp from "../components/FavComp";
import NavBar from "../components/NavBar";

const Favorite = () => {
    return ( 
        <div className='flex flex-row md:flex-col'>
            <NavBar />
            <FavComp/>
        </div>
     );
}
 
export default Favorite;