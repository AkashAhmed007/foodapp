export default function FoodListItem({food}) {
  return (
    <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />
    </div>
  )
}
