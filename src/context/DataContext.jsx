import { createContext, useContext, useEffect, useState } from "react";
import data from '../components/utils/data.json'





const DataContext = createContext()

export const DataProvider = ({children}) => {
    const [firstRender, setFirstRender] = useState([])
    const [fullList, setFullList] = useState([])
    const [alphaOrderListToZ, setAlphaOrderListToZ] = useState([])
    const [alphaOrderListToA, setAlphaOrderListToA] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [displaySearch, setDisplaySearch] = useState(false)
    const [searchResult, setSearchResult] = useState(null)
    const [inputData, setInputData] = useState('')
    const [sortOption, setSortOption] = useState('')

    useEffect(() => {
        try {
            if(!data || data.length === 0) {
                setError('Data file is not provided')
            } else {
                setFirstRender([...data].slice(0, 8))
                
                setAlphaOrderListToZ([...data].sort((a , b) => a.name.localeCompare(b.name)))
                setAlphaOrderListToA([...data].sort((a , b) => b.name.localeCompare(a.name)))
                setFullList([...data])
            }
        } catch (e) {
            setError('Internal server Error')
        } finally {
            setLoading(false)
        }
    },[])

    useEffect(() => {
  console.log("firstRender updated:", firstRender);
}, [firstRender]);

    useEffect(() => {
        const res = data.filter(item => item.name.toLocaleLowerCase().includes(inputData.toLocaleLowerCase()))
                    setSearchResult(res)
    },[inputData])

    const value = {firstRender, fullList, error, loading, setDisplaySearch, displaySearch, inputData, setInputData, searchResult, alphaOrderListToZ,sortOption, setSortOption,alphaOrderListToA}

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export const useData = () => useContext(DataContext)