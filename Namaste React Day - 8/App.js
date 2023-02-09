import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import Body from "./src/Component/Body/Body";
import Footer from "./src/Component/Footer/Footer";
import Header from "./src/Component/Header/Header";
import About from "./src/component/AboutUs/About";
import Contact from "./src/Component/Contact/Contact";
import Error from "./src/Component/Error Page/Error";
import Login from "./src/Component/Login/Login";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./src/Component/RestMenu/RestaurantMenu";
import Shimmer from "./src/Component/Shimmer";
import ProfileFunctionalCom from "./src/Component/ProfileFunctionalCom";
// import InstaMart from "./src/Component/InstaMart"; -- we don't need to import like this.

// chunking
// dynamic import
// dynamic loading       ----------- same name ---------
// on demand loadingc
// code spillting
// lazy loading

// we have to import like this and lazy comes from react libaries
// import is a promise
const InstaMart = lazy(() => import("./src/Component/InstaMart"));

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileFunctionalCom />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

export default App;
