import React from "react";
import "./fitnessclub.css";
import Card from "../Card/Card";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Login from "../Login/Login"

function Fitnessclub() {
  return (
    <>
      <div className="fitcontainer">
        <h1>
          Crush your health and <br />
          fitness goals in no time
        </h1>

        <p>
          It doesn’t matter if your goal is to get stronger, burn fat, or to
        </p>
        <p>
          just stay fit our world class coaches will guide you every step of the
          way.
        </p>

        <div className="fitbutton" role="button">
        <button>Start 7 day free trial </button>
        </div>
      </div>

      <div className="fitheadtwo">
        <h1>We offer something</h1>
        <h1> for everybody</h1>
      </div>

      <Card />
      <About/>
      <Contact/> 
      <Login/>
    
    </>
  );
}

export default Fitnessclub;
