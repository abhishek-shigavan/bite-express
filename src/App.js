import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import RestaurantCardContainer from "./components/RestaurantCardContainer";
import Offers from "./components/Offers";
import Cart from "./components/Cart";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <RestaurantCardContainer />
    </>
  );
};

const AppRoutes = createBrowserRouter([
  { path: "/", element: <AppLayout /> },
  { path: "/offers", element: <Offers /> },
  { path: "/cart", element: <Cart /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoutes} />);
