import { useParams } from "react-router-dom";
import "./Styles/Announcement.css";
import { useEffect, useState } from "react";

const AnnouncementPage = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, [data])

    async function getData() {
        try{

        setTimeout(() => {
            let data = 
                {
                    id: 1,
                    title: "Class meeting",
                    time: 12 + ":" + 30,
                    type: "meeting",
                    text: "Hello we have a meeting today"
                }
            setData(data);
            setLoading(false);
        }, 1000)

        }catch (error) { //catch if error in getting data.
            console.log(error);
        }
    }
   


return (
    <>
        {loading && <p>indlæser announcement..</p>}
        {!loading && <div>
            <h1>{data.type}</h1>
            <section>
            <p>{data.time}</p>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            </section>
            </div>}
    </>
);
  };

export default AnnouncementPage;