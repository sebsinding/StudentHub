import "./Announcements.css";
import { useEffect } from "react";
import Announcement from "./Components/Announcement";


const AnnouncementsPage = () => {
  const data = [
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
function loadAnnouncements() {
  return data.map(data => <Announcement onClick={() => onAnnouncementClick(data.id)} key={data.id}  {...data} />)
}

function onAnnouncementClick(id) {
  // Navigate to new page with this id
  
}
  return (
    <div>
      <div>
        <h1>Announcements</h1>
        {loadAnnouncements()}
      </div>
    </div>
  );
  
  //const [announcements, setAnnouncements] = useState([]);

  /*useEffect(() => {
    getAnnouncements();
  }, [])*/

  /*async function getAnnouncements() {
    try {
      
      // real request (axios)
      

      // Fake request
      setTimeout(() => {

        let data = [
          {
            id: 1,
            title: "Hello"
          },
          {
            id: 2,
            title: "test"
          }
        ]

        setAnnouncements(date);

      }, 2000)

    } catch (error) {
      console.log(error)
    }
  }*/

};

export default AnnouncementsPage;