import FoodListItem from "./FoodListItem";

export default function FoodList({foodData}) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodListItem key={food.id} food={food}></FoodListItem>
      ))}
    </div>
  );
}
