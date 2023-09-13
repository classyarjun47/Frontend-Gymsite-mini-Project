import React from "react";

import './Contact.css';

function Contact() {
  return (
    <>
   <div className="contain1">
    <div class="background1">
        <div class="shape1"></div>
        <div class="shape1"></div>
    </div>
    <form className="form11">
        <h3>Contact Here</h3>

        <label for="FullName">Name</label>
        <input type="text" placeholder="Enter Email" id="FullName"/>

        
        <label for="Textarea">Enter Query</label>
        <textarea type="text" id="" rows="5">
          
         </textarea>

        <button>Submit</button>
      
    </form>
    </div>


    </>
  );
}

export default Contact;
