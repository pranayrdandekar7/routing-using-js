import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';



const root = ReactDOM.createRoot(document.getElementById('root'));

const path = window.location.pathname ;
console.log(path)
 

if(path=="/")
  {
   root.render(<Home/>)
}

else if (path=="/about"){
  root.render(<About/>)
}

else if(path=="/contact"){

  root.render(<Contact/>)
}
else{
  root.render("404 Not Found")
}

