import FoodListItem from "./FoodListItem";

export default function FoodList({foodData,setFoodId}) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodListItem key={food.id} setFoodId={setFoodId} food={food}></FoodListItem>
      ))}
    </div>
  );
}
