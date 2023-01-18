import React from 'react';
import ReactDom from "react-dom/client"
import Body from './src/Component/Body/Body';
import Footer from './src/Component/Footer/Footer';
import Header from './src/Component/Header/Header';
import "./index.css"

const App = () => {
  return (
    <>
        <Header/>
        <Body />
        <Footer />
    </>
  )
}


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>)

export default App;