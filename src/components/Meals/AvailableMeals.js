import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Idly",
    description: "With Sambar",
    price: 15.99,
  },
  {
    id: "m2",
    name: "Vada",
    description: "With Chilli",
    price: 6.5,
  },
  {
    id: "m3",
    name: "Puri",
    description: "With Kurma",
    price: 20.99,
  },
  {
    id: "m4",
    name: "Dosa",
    description: "With Coconut Chutney.",
    price: 20.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
