import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { useData } from "../../context/DataContext";


const Heaqding = () => {
    const[choiceOne, setChoiceOne] = useState(false)
    const[choiceTwo, setChoiceTwo] = useState(false)

    const {setInputData, inputData, searchResult,setDisplaySearch} = useData()

    const handleSearch = (e) => {
        setInputData(e.target.value)
    }
    

    useEffect(() => {console.log(inputData)},[inputData])
        
    return ( 
        <div className="max-w-[1150px] w-full mx-auto md:px-6 md:py-4">
            <h1 className="text-2xl md:text-3x1 md:w-[50%] w-full font-semibold tracking-[1px] md:mt-4 md:mb-6">DevTools Marketplace</h1>
            <div className="w-full relative py-2 my-2">
                <CiSearch className="absolute left-2 bottom-5"/>
                <input type="text" value={inputData} onChange={handleSearch} className="md:py-2 md:w-[98%] pl-8 rounded-md outline-none border border-gray-300 focus:border-blue-300 " placeholder="Search tools..."/>
            </div>
            <div className="flex flex-col md:flex-row justify-between w-auto">
                <div className="h-auto w-[50%] relative flex">
                    <span className="text-[18px] my-2 mr-4">Filter</span>
                    <div className="items-center flex cursor-pointer"onClick={() => setChoiceOne((prev) => !prev)}>
                        <FaCaretDown className="text-2xl border border-gray-300 rounded-md hover:shadow-md "/>
                    </div>
                    {choiceOne && <div className="w-auro h-auto bg-slate-100 absolute left-0 top-11 z-10 rounded-md py-4 px-2 shadow-sm">
                        <div className="flex items-center my-2">
                            <input type="radio" name="cat" id="" />
                            <span className="text-[12px] mx-2">Alphabetical   A &gt;&gt; Z</span>
                        </div>
                        <div className="flex items-center my-2">
                            <input type="radio" name="cat" id="" />
                            <span className="text-[12px] mx-2">Sort by Price</span>
                        </div>
                    </div>}
                </div>
                <div className="min-w-fit">Current Filter : </div>
                <div className="h-auto w-[50%] relative flex justify-end">
                    <span className="text-[18px] my-2 mr-4">Categories</span>
                     <div className="items-center flex cursor-pointer"onClick={() => setChoiceTwo((prev) => !prev)}>
                        <FaCaretDown className="text-2xl border border-gray-300 rounded-md hover:shadow-md "/>
                    </div> 
                    {choiceTwo && <div className="w-auro h-auto bg-slate-100 absolute right-0 top-11 z-10 rounded-md py-4 px-2 shadow-sm">
                        <div className="flex items-center my-2">
                            <input type="radio" name="cat" id="" />
                            <span className="text-[12px] mx-2">Alphabetical   A &gt;&gt; Z</span>
                        </div>
                        <div className="flex items-center my-2">
                            <input type="radio" name="cat" id="" />
                            <span className="text-[12px] mx-2">Sort by Price</span>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
     );
}
 
export default Heaqding

