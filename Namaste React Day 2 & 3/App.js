import React from "react";
import ReactDom from "react-dom/client";

const HeaderComponent = () =>{
  return(
    <div className="header">
        <h1>Hello Header</h1>

        // we can write js code inside the curly braces
        <h2>{ 1+1  }</h2>
    </div>
  )
}
const root = ReactDom.createRoot(document.getElementById('root'))

root.render(HeaderComponent());

// npx = execute
// -D = dev dependency 
// parcel is a beast 
// -> File watcher
// -> media optimization
// -> Treeshaking
// -> zeroConfig
// -> caching while dev..
// -> Minify , Removing console, https on development

// Bundler ->vite , parcel, webpack(create-react-app) 

// jsx is not html,Its only html like syntax 

// jsx use => React.createElement = > object => HTML(DOM) 
// babel is converting 

// there are two type of component  
// 1. functional  component(new way of writing a code)
// 2. class based component 

// functional component is nothing but its a normal function 

// component composition 
