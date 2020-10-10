import React from "react";
import ReactDom from "react-dom";
import "./index.css";
 

let currentDate = new Date();
currentDate = currentDate.getHours();
let greet = '';
const css= { };

if(currentDate >= 1 && currentDate <12){
  greet=" Good Morning";
  css.color="Green";
}else if(currentDate >=12 && currentDate < 19){
  greet=" Good Evening";
  css.color="Orange";
} else{
  greet=" Good Night"
  css.color="Black";
}



ReactDom.render(

  <div>
<h1>
   Welcome Samad <span style={css}> {greet} </span> 
   </h1>
   </div>,
   document.getElementById("root")
 
);