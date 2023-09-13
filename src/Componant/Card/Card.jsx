import React from "react";
import "./Card.css";

function Card() {
  const Cdata = [
    {
      id: 1,
      name: "CrossFit Classes",
      imgsrc:
        "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80",
    },
    {
      id: 2,
      name: "Strenth Training",
      imgsrc:
        "https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },

    {
      id: 3,
      name: "Personal Training",
      imgsrc:
        "https://images.unsplash.com/photo-1613845205719-8c87760ab728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    },

    {
      id: 4,
      name: "Member Only Event",
      imgsrc:
        "https://images.unsplash.com/photo-1606889464198-fcb18894cf50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1990&q=80",
    },
  ];

  return (
    <>

      <div className="service">
        <h1 style={{ textAlign: "center" }}>Services</h1>
      </div>

      <div className="maincontainer">
        {Cdata.map((cdatas) => (
          <div className="card" key={cdatas.id}>
            <h3>{cdatas.name}</h3>
            <img src={cdatas.imgsrc} alt="Avatar" style={{ width: "100%" }} />
          </div>

        ))}
      </div>
    </>
  );
}

export default Card;
