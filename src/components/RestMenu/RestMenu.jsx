import { ShopContext } from "../App";
import { MealCard } from "../MealCard/MealCard";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MenuWrapper } from "./RestMenu.styled";

export const RestMenu = () => {
  const param = useParams();
  const { shops } = useContext(ShopContext);

  const restaurant = shops.find(
    (rest) => rest.restaurantName === param.activeRestName
  );
  const menu = restaurant.items;

  useEffect(() => {
    localStorage.setItem(
      "activeRestaurant",
      JSON.stringify(param.activeRestName)
    );
  }, [param]);

  return (
    <MenuWrapper>
      {menu.map((meal) => (
        <MealCard
          prop={meal}
          key={restaurant.restaurantName + "_" + meal.name}
        />
      ))}
    </MenuWrapper>
  );
};
