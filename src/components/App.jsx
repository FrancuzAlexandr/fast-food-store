import { Navigate, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Shop } from "./Shop/Shop";
import React, { useEffect, useState } from "react";
import { RestMenu } from "./RestMenu/RestMenu";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import axios from "axios";
axios.defaults.baseURL = "https://63adedf4ceaabafcf16fc55a.mockapi.io";
const ShopContext = React.createContext();
const MealsContext = React.createContext();

export const App = () => {
  const [shops, setShops] = useState([]);
  const [meals, setMeals] = useState([]);
  const [currentRest, setCurrentRest] = useState("");

  useEffect(() => {
    axios
      .get("/restaurants")
      .then(function (response) {
        setShops(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const currentStorageMeals = JSON.parse(localStorage.getItem("meals"));
    const currentStorageRest = JSON.parse(
      localStorage.getItem("activeRestaurant")
    );

    if (currentStorageRest) {
      setCurrentRest(currentStorageRest);
    }

    if (currentStorageMeals) {
      setMeals(currentStorageMeals);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

  if (shops.length === 0) return;

  return (
    <ShopContext.Provider value={{ shops, setShops }}>
      <MealsContext.Provider value={{ meals, setMeals }}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Navigate to="main" />} />
            <Route path="main" element={<Shop />}>
              <Route index element={<Navigate to={currentRest} />} />
              <Route path={`:activeRestName`} element={<RestMenu />} />
            </Route>
            <Route path="cart" element={<ShoppingCart />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </MealsContext.Provider>
    </ShopContext.Provider>
  );
};

export { ShopContext, MealsContext };
