import { use, useEffect, useState } from 'react';
import jsonIcon from '../../assets/jsonicon.png'
import { FaStar } from "react-icons/fa";

const Card = ({tool}) => {
    const [star, setStar] = useState(false)

    const handleClickFav = () => {
    setStar(prev => !prev);
    const existing = JSON.parse(localStorage.getItem("Favtools")) || [];
    const updated = existing.includes(tool.id)
        ? existing.filter(id => id !== tool.id)
        : [...existing, tool.id];
    localStorage.setItem("Favtools", JSON.stringify(updated));
    window.dispatchEvent(new Event("favchange")); 
    };

    return ( 
        <div className='md:max-h-[350px] flex flex-col px-2 md:px-4 font-sans md:pt-4 pt-3 pb-3 md:pb-6 w-[auto]  bg-white rounded-md border border-gray-300 relative    '>
            <img src={tool.img} className='w-[36px] h-[36px] md:w-[56px] md:h-[56px]' alt="icon" />
            <p className='pt-3 font-medium text-[18px] md:text-[22px]'>{tool.name}</p>
            <p className='pt-2 md:pb-4 pb-2 break-words overflow-hidden max-w-[150px] md:max-w-[170px] text-[14px] md:text-[16px]'>{tool.description}</p>
            <div className='bg-slate-300 w-fit rounded p-1 text-[12px] md:text-[16px]'>{tool.tag}</div>
            <div className='pt-2  font-medium text-[20px] flex items-center justify-between mt-auto'>
                <span>Open</span>
                <a href={tool.link}>
                    
                <button className='bg-blue-600 text-white rounded md:px-4 md:py-2 px-2 py-1'> ⟶ </button>
                </a>
            </div>
            <FaStar onClick={handleClickFav} className= {`hover:cursor-pointer w-[25px] md:w-[35px] h-[25px] md:h-[35px] absolute top-[10px] right-2 hover:scale-110 transition-transform duration-300  ${star ? 'text-red-300' : 'text-gray-300'}`}/>
        </div>
     );
}
 
export default Card;    