import React from "react";
import "./Announcements.css";

function Announcement (props) {

  const {title, time, type, text} = props;

    return (
      <div onClick={props.onClick} class="Border">
            <section class="Time">
            <p>{time}</p>
            </section>
            <br/>
            <section class="Titel">
            <h2>{title}</h2>
            </section>
            <br/>
            <p>{text}</p>
        
      </div>
    )
  };
  
  export default Announcement