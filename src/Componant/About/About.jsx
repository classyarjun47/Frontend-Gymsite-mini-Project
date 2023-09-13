import React from "react";
import "./About.css";
function About() {
  return (
    <>
    <div className="aboutus">
      <h1>About Us</h1>
      </div>
    
      <div className="aboutcon">
          
          <div className="img_container">
            <img
              src="https://dp.profilepics.in/download.php?img=https://dp.profilepics.in/dp/2023/anime-dp-for-boys/dp-for-boys-anime-01.jpg"
              alt="mypic"/>
          </div>

        <div className="about2">
          <h1>Arjun Rajput</h1>
          <h3>Full Stack Java Developer :- </h3>
          <p>I am basically from Aurangabad Maharashtra</p> 
          <p>I have Completed My Graduation from <b>BAMU University</b></p> 
          <p>I have Completed Full Stack java Development at <b>KP INFOTECH PVT LTD AURANGABAD</b></p> 
          
        </div>
      </div>

      {/* <footer className="footer1">
        <p>&copy; 2023 Your Website Name. All Rights Reserved.</p>
      </footer> */}
    </>
  );
}

export default About;
