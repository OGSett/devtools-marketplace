import jsonIcon from '../../assets/jsonicon.png'
import { CiStar } from "react-icons/ci";

const Card = () => {
    return ( 
        <div className='md:h-[350px] flex flex-col px-2 md:px-6 font-sans md:pt-4 pt-3 pb-3 md:pb-6 w-[auto]  bg-white rounded-md border border-gray-300 relative    '>
            <img src={jsonIcon} className='w-[36px] h-[36px] md:w-[56px] md:h-[56px]' alt="icon" />
            <p className='pt-3 font-medium text-[18px] md:text-[22px]'>JSONLint</p>
            <p className='pt-2 md:pb-4 pb-2 break-words overflow-hidden max-w-[150px] md:max-w-[170px] text-[14px] md:text-[20px]'>Validate and Formal JSON data</p>
            <div className='bg-slate-300 w-fit rounded p-1 text-[12px] md:text-[16px]'>JSON</div>
            <div className='pt-6  font-medium text-[20px] flex items-center justify-around mt-auto'>
                <span>Open</span>
                <button className='bg-blue-600 text-white rounded md:px-4 md:py-2 px-2 py-1'> ⟶ </button>
            </div>
            <CiStar className='w-[25px] md:w-[35px] h-[25px] md:h-[35px] absolute top-[10px] right-2' />
            
        </div>
     );
}
 
export default Card;