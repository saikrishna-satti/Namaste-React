import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";

import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center pt-[100px] ">
      <Header />
        <Outlet />      
      <Footer />
    </div>
  );
};


const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children :[
      {
        path:"/",
        element:<Body />,
      },
      {
      path: "about",
      element: <About />,
      },
      {

         path:"/restaurants/:resId",
         element:<RestaurantMenu />
      }
  ],
    errorElement: <Error />,
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);