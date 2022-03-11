import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <div className="divLinks">
                <Link className="link" to="/">Calendar</Link>
                <Link className="link" to="/MyLessonPlan">My Lesson Plan</Link>
                <Link className="link" to="/StudyGuidance">Study Guidance</Link>
                <Link className="link" to="/Announcements">Announcements</Link>
                <Link className="link" to="/CourseDatabase">Course Database</Link>
                <Link className="link" to="/Grades">Grades</Link>    
            </div>
        </nav>  
    )
  };
  
  export default NavBar;
