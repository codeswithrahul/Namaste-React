import React from "react";
import ReactDom from "react-dom/client";

01.  assignment create a nested header element using React.createElement(h1,h2,h3 inside a div with class 'title')
const h1 = React.createElement("h1",{},'this is heading1')
const h2 = React.createElement("h2",{},'this is heading2')
const h3 = React.createElement("h3",{},'this is heading3')

const header = React.createElement("div",{ className : "title"} ,[h1,h2,h3])
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(header);

02. Create the same element using jsx
const heading = (
  <div className="title">
    <h1> this is heading 1</h1>
    <h2>this is heading 2</h2>
    <h3>this is heading3</h3>
  </div>
)

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(heading);

03. create a functional component of the same name with jsx

const Header = () => {
  return (
    <div className="title">
      <h1> This is heading 1</h1>
      <h2> This is heading 2</h2>
      <h3> This is heading 3</h3>
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(header());
or 
root.render(<Header />);

-------------- end ---------------- 
