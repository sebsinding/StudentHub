import { useParams } from "react-router-dom";
import Announcement from "./Components/Announcement";
 
const AnnouncementPage = () => {
    const{ id } = useParams();

    return (
      <>
      <div>
        <p>hey {id}</p>
      </div>
      </>
    )
  };
  
  export default AnnouncementPage;