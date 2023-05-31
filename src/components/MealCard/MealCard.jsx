import { MealsContext } from "../App";
import {
  CardBtn,
  CardBtnWrapper,
  CardImg,
  CardTitle,
  CardWrapper,
} from "./MealCard.styled";
import { useContext } from "react";

export const MealCard = ({ prop }) => {
  const { name, photo, itemId } = prop;
  const { meals, setMeals } = useContext(MealsContext);
  const addedMeal = meals.some((meal) => meal.itemId === itemId);

  const addToCart = () => {
    setMeals((prev) => [...prev, prop]);
  };

  return (
    <CardWrapper>
      <CardImg src={`${photo}`} alt={`${name}`} />
      <CardTitle>{name}</CardTitle>
      <CardBtnWrapper>
        {!addedMeal ? (
          <CardBtn type="button" onClick={addToCart}>
            add to Cart
          </CardBtn>
        ) : (
          <CardBtn type="button" disabled>
            in Cart
          </CardBtn>
        )}
      </CardBtnWrapper>
    </CardWrapper>
  );
};
