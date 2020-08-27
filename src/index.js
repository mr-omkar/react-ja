import React from "react";
import ReactDOM from "react-dom";

const name="Omkar"
const age=17

ReactDOM.render(
  <> <h1> Welcome to my page </h1>
      <p> Name : {name} </p>
      <p> Age : {age + 1} </p>
      <p> Age : {console.log("hi")} </p>
  </>
  , document.getElementById("root")
  );
