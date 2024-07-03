import { useEffect, useState } from "react"
export default function FoodDetails({foodId}) {
    const [food,setFood] = useState({})
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const apiKey = "6fbe90afd81e4c04ae56de738d978b43"
    useEffect(()=>{
        async function fetchFood(){
            const res = await fetch(`${URL}?apiKey=${apiKey}`)
            const data = await res.json()
            setFood(data)
         }
         fetchFood()
     },[foodId])
  return (
    <div>FoodDetails:{foodId}
    <h1>{food.title}</h1>
    <img src={food.image} alt="" />
    </div>
  )
}
