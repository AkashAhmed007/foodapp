import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./itemList";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log(food);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = "6fbe90afd81e4c04ae56de738d978b43";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${apiKey}`);
      const data = await res.json();
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⌚{food.readyInMinutes}Minutes</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕Vagetarian" : "🍖Non Vegetarian"}
            </strong>
          </span>
          <span>
            🤼<strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐐Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          💲
          <span>
            <strong>{food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
        <h1>Ingredients</h1>
        <ItemList food={food} isLoading={isLoading}></ItemList>
        <div className={styles.recipeInstruction}>
          <h1>Instructions</h1>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
