import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Amma Chethi Vanta, Delivered To You</h2>
      <p>
      Choose a meal that you love: Whether it's a homemade dish or takeout from your favorite restaurant, pick something that you're excited to eat.
      </p>
      <p>
      Take your time: Enjoy each bite and savor the flavors. Put away distractions like phones or screens to fully immerse yourself in the meal.
      </p>
    </section>
  );
};

export default MealsSummary;
