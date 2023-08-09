import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import RestaurantCardContainer from "./components/RestaurantCardContainer";
import Offers from "./components/Offers";
import Cart from "./components/Cart";
import InvalidRoute from "./components/InvalidRoute";
import RestaurantMenuCard from "./components/RestaurantsMenuCard";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <InvalidRoute />,
    children: [
      { path: "/", element: <RestaurantCardContainer /> },
      { path: "/restaurant/:resId", element: <RestaurantMenuCard /> },
      { path: "/offers", element: <Offers /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoutes} />);
