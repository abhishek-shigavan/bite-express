import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import RestaurantCardContainer from "./components/RestaurantCardContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <HeaderComponent />
    <RestaurantCardContainer />
  </>
);
