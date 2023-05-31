import { useContext } from "react";
import { RestAside, RestLink, RestTitle } from "./RestList.styled";
import { MealsContext } from "../App";

export const RestList = ({ restNames }) => {
  const { meals } = useContext(MealsContext);
  return (
    <RestAside>
      <RestTitle>Shops:</RestTitle>
      {restNames.map((name) => (
        <RestLink key={name} to={`${name}`} meals={meals}>
          {name}
        </RestLink>
      ))}
    </RestAside>
  );
};
