import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import RestaurantCardContainer from "./components/RestaurantCardContainer";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <RestaurantCardContainer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
