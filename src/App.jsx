import { useState } from 'react'
import Search from './components/Search'
import FoodList from './components/FoodList'
function App() {
  const [foodData,setFoodData] = useState([])
return (
    <div className="App">
      <Search foodData={foodData} setFoodData={setFoodData} ></Search>
      <FoodList foodData={foodData}></FoodList>
    </div>
  )
}

export default App
