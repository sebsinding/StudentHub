import React from "react";
import Announcement from "./Announcement";
import Announcements from "./Announcement";
function AnnouncementsList () {
    const announcements = [
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
        }
    ]

    function onAnnouncementClick(id) {
        // Navigate to new page with this id

    }
    
    function loadAnnouncements() {
      return announcements.map(announcement => <Announcement onClick={() => onAnnouncementClick(announcement.id)} key={announcement.id}  {...announcement} />)
    }
    

    return (
      <div>
        {loadAnnouncements()}
      </div>
    )
  };
  
  export default AnnouncementsList;