import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import Footer from "./src/Components/Footer";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";

const App = () => {
  return (
    <>
      {
        /*Header
             -logo
             -Nav- items(Right sides)
             -cart
          Body
             -Search bar
             -Restaurant list   
             -Restaurant Card
                 -Image
                 -name
                 -Rating
                 -cusines
          Footer
                 
         */  
      }
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
