import React from "react";
import "./Styles/Announcements.css";
import { useEffect, useState } from "react";
import Announcement from "./Components/Announcement";
import AnnouncementPage from "./AnnouncementPage";
import { useNavigate } from "react-router-dom";




const AnnouncementsPage = () => {
  const nav = useNavigate();
  const [Announcements, setAnnouncements] = useState([]);

  useState(() => {
    getAnnouncements();
  }, [])
  async function getAnnouncements() {
    try {
      
      // real request (axios)
    
      // Fake request
      setTimeout(() => {

        let data = [
          {
              id: 1,
              title: "Class meeting",
              time: 12 + ":" + 30,
              type: "meeting",
              text: "Hello we have a meeting today"
          },
          {
              id: 2,
              title: "Parent meeting",
              time: 11 + ":" + 30,
              type: "meeting",
              text: "Hello we have a meeting tomorrow"
          },
          {
              id: 3,
              title: "Fun meeting",
              time: 10 + ":" + 30,
              type: "meeting",
              text: "Hello we have a meeting tomorrow, remember to bring you glasses and have some fun in the sea and you should also give me money"
          }
        ]

        setAnnouncements(data);

      }, 20)

    } catch (error) {
      console.log(error)
    }
  }

function loadAnnouncements() {
  return Announcements.map(data => <Announcement onClick={() => onAnnouncementClick(data.id)} key={data.id}  {...data} />)
}

function onAnnouncementClick(id) {
  // Navigate to new page with this id
  let path = "/Announcements/" + id;
  console.log(path);
  nav(path);
  //let newURL = new URL(id, "/Announcements/");
}
  return (
    <div>
      <div>
        <h1>Announcements</h1>
        {loadAnnouncements()}
      </div>
    </div>
  );
};

export default AnnouncementsPage;