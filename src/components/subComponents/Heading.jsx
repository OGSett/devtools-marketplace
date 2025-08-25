import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { useData } from "../../context/DataContext";


const Heaqding = () => {
    const[choiceOne, setChoiceOne] = useState(false)
    const[choiceTwo, setChoiceTwo] = useState(false)
    


    const {setInputData, inputData, searchResult,sortOption, setSortOption, byTag, setByTag} = useData()

    const handleSearch = (e) => {
        setInputData(e.target.value)
    }
    

    useEffect(() => {console.log(sortOption)},[sortOption])
        
    return ( 
        <div className="max-w-[1150px] w-full mx-auto md:px-6 md:py-4">
            <h1 className="text-2xl md:text-3x1 md:w-[50%] w-full font-semibold tracking-[1px] md:mt-4 md:mb-6">DevTools Marketplace</h1>
            <div className="w-full relative py-2 my-2">
                <CiSearch className="absolute left-2 bottom-5"/>
                <input type="text" value={inputData} onChange={handleSearch} className="md:py-2 md:w-[98%] pl-8 rounded-md outline-none border border-gray-300 focus:border-blue-300 " placeholder="Search tools..."/>
            </div>
            <div className="flex flex-col md:flex-row justify-around w-auto">
                <div className="h-auto w-[15%] bg-gradient-to-t rounded-lg flex justify-between px-2 from-gray-100 via-gray-400 to-gray-800 relative ">
                    <span className="text-[18px] my-2 mr-4">Filter</span>
                    <div className="items-center flex cursor-pointer"onClick={() => setChoiceOne((prev) => !prev)}>
                        <FaCaretDown className="text-2xl border border-gray-300 rounded-md hover:shadow-md "/>
                    </div>
                    {choiceOne && <div className="w-auto h-auto bg-slate-100 absolute left-0 top-11 z-10 rounded-md py-4 px-2 shadow-sm">
                        <div className="flex items-center my-2">
                            <input className="hover:cursor-pointer" type="radio" value='' checked={sortOption === ''} onChange={() => setSortOption('')} name="alphabetical" id="" />
                            <span className="text-[12px] mx-2">Default set</span>
                        </div>
                        <div className="flex items-center my-2">
                            <input className="hover:cursor-pointer" type="radio" value='az' checked={sortOption === 'az'} onChange={() => setSortOption('az')} name="alphabetical" id="" />
                            <span className="text-[12px] mx-2">Alphabetical   A &gt;&gt; Z</span>
                        </div>
                        <div className="flex items-center my-2">
                            <input className="hover:cursor-pointer" type="radio" value='za' checked={sortOption === 'za'} onChange={() => setSortOption('za')} name="alphabetical" id="" />
                            <span className="text-[12px] mx-2">Alphabetical   Z &gt;&gt; A</span>
                        </div>
                    </div>}
                </div>
                <div className="h-auto w-[15%] bg-gradient-to-t rounded-lg flex justify-between px-2 from-gray-100 via-gray-400 to-gray-800 relative ">
                    <span className="text-[18px] my-2 mr-4">Categories</span>
                     <div className="items-center flex cursor-pointer"onClick={() => setChoiceTwo((prev) => !prev)}>
                        <FaCaretDown className="text-2xl border border-gray-300 rounded-md hover:shadow-md "/>
                    </div> 
                    {choiceTwo && <div className="w-auro h-auto bg-slate-100 absolute right-0 top-11 z-10 rounded-md py-4 px-2 shadow-sm">
                        <div className="flex items-center my-2">
                            <input className="hover:cursor-pointer" value='' checked={byTag === ''} onChange={() => setByTag('')} type="radio" name="default" id="default" />
                            <span className="text-[12px] mx-2">Default set</span>
                        </div>
                        <div className="flex items-center my-2">
                            <input className="hover:cursor-pointer" value='API & Data' checked={byTag === 'API & Data'} onChange={() => setByTag('API & Data')} type="radio" name="API & Data" id="APIData" />
                            <span className="text-[12px] mx-2">API & Data</span>
                        </div>
                        <div className="flex items-center my-2">
                            <input className="hover:cursor-pointer" value='Performance' checked={byTag === 'Performance'} onChange={() => setByTag('Performance')} type="radio" name="Performance" id="Performance" />
                            <span className="text-[12px] mx-2">Performance</span>
                        </div>
                        <div className="flex items-center my-2">
                            <input className="hover:cursor-pointer" value='Design & UI' checked={byTag === 'Design & UI'} onChange={() => setByTag('Design & UI')} type="radio" name="Design & UI" id="DesignUI" />
                            <span className="text-[12px] mx-2">Design & UI</span>
                        </div>
                        <div className="flex items-center my-2">
                            <input className="hover:cursor-pointer" value='Code & Utility' checked={byTag === 'Code & Utility'} onChange={() => setByTag('Code & Utility')} type="radio" name="CodeUtility" id="CodeUtility" />
                            <span className="text-[12px] mx-2">Code & Utility</span>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
     );
}
 
export default Heaqding

