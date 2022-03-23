import React from "react";
import "../Styles/Announcements.css";

function Announcement (props) {
  //constant for different values of the announcements(props)
  const {title, time, type, text} = props;

    return (
      <div onClick={props.onClick} className="Border">
            <section className="Time">
            <p>{time}</p>
            </section>
            <br/>
            <section className="Titel">
            <h2>{title}</h2>
            </section>
            <br/>
            <p>{text}</p>
      </div>
    )
  };
  
  export default Announcement