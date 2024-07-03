import { useEffect, useState } from "react";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading,setIsLoading] = useState(true)
  console.log(food);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = "6fbe90afd81e4c04ae56de738d978b43";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${apiKey}`);
      const data = await res.json();
      setFood(data);
      setIsLoading(false)
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />
      </div>
      <div>
        <span>
          <strong>⌚{food.readyInMinutes}Minutes</strong>
        </span>
        <span>
          <strong>
            {food.vegetarian ? "🥕Vagetarian" : "🍖Non Vegetarian"}
          </strong>
        </span>
      </div>
      <div>
        <h1>Instructions</h1>
        {isLoading ? <p>Loading...</p>:food.analyzedInstructions[0].steps.map((step) => (
          <li key={step.number}>{step.step}</li>
        ))}
      </div>
    </div>
  );
}
