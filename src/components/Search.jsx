import { useEffect, useState } from "react"
export default function Search({foodData,setFoodData}) {
    const [query,setQuery] = useState('pasta')
    const URL = "https://api.spoonacular.com/recipes/complexSearch"
    const apiKey = "6fbe90afd81e4c04ae56de738d978b43"
    useEffect(()=>{
       async function fetchFood(){
           const res = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`)
           const data = await res.json()
           
           setFoodData(data.results)
        }
        fetchFood()
    },[query])
  return (
    <div>
        <input onChange={(e)=>setQuery(e.target.value)} type="text" value={query}/>
    </div>
  )
}
