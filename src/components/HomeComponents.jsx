import { useEffect, useState } from "react";
import Card from "./subComponents/Card";
import data from './utils/data.json'
import { useData } from "../context/DataContext";


const HomeComp = () => {

    const {firstRender, fullList, error, inputData, searchResult, alphaOrderListToZ, sortOption, alphaOrderListToA, filterByTag, byTag} = useData()
    const [toRender, setToRender] = useState([])



    
   useEffect(() => {
        if (sortOption === 'az') {
            setToRender(alphaOrderListToZ)
        } else if (sortOption === 'za') {
            setToRender(alphaOrderListToA)
        } else if (byTag === 'API & Data' || byTag === 'Performance' || byTag === 'Design & UI' || byTag === 'Code & Utility'){
            setToRender(filterByTag);
        } else if (inputData.trim() === '') {
            setToRender(firstRender);
        } else {
            setToRender(searchResult);
        }
    }, [inputData, firstRender, searchResult,sortOption,byTag,filterByTag]);

    useEffect(()=>{console.log(alphaOrderListToZ)},[alphaOrderListToZ])

    if (error) return <div>{error}</div>


    return ( <div className="tester  w-full   h-full  overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="grid gap-[10px] grid-cols-[repeat(2,minmax(auto,2fr))] sm:grid-cols-[repeat(2,minmax(200px,1fr))] md:grid-cols-[repeat(3,minmax(200px,1fr))] lg:grid-cols-[repeat(4,minmax(190px,1fr))] px-0 sm:px-6 lg:max-w-[1150px] mx-auto">
  
            {toRender.map((tool, index) => (
                <Card key={index} tool={tool} />
            ))}
        </div>
    </div> );
}
 
export default HomeComp