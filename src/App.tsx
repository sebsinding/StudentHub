import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layouts/Layout";
import Calendar from "./Pages/Calendar";
import MyLessonPlan from "./Pages/MyLessonPlan";
import Announcements from "./Pages/Announcements";
import CourseDatabase from "./Pages/CourseDatabase";
import StudyGuidance from "./Pages/StudyGuidance";
import Grades from "./Pages/Grades";
import NoPages from "./Pages/NoPages";
import Login from "./Pages/Login";
import AlternativeLayout from "./Components/Layouts/AlternativeLayout";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<AlternativeLayout />} />
            <Route index element={<Login />} />
            <Route path="*" element={<NoPages />} />  
          <Route path="/" element={<Layout />}>
            <Route path="Calendar" element={<Calendar />} />
            <Route path="StudyGuidance" element={<StudyGuidance />} />
            <Route path="MyLessonPlan" element={<MyLessonPlan />} />
            <Route path="Announcements" element={<Announcements />} />
            <Route path="CourseDatabase" element={<CourseDatabase />} />
            <Route path="Grades" element={<Grades />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };