import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layouts/Layout";
import Home from "./Pages/Home";
import MyLessonPlan from "./Pages/MyLessonPlan";
import AnnouncementsPage from "./Pages/Announcements/AnnouncementsPage";
import CourseDatabase from "./Pages/CourseDatabase";
import StudyGuidance from "./Pages/StudyGuidance";
import Grades from "./Pages/Grades";
import NoPages from "./Pages/NoPages";
import Login from "./Pages/Login";
import AnnouncementPage from "./Pages/Announcements/AnnouncementPage";
import AlternativeLayout from "./Components/Layouts/AlternativeLayout";
import Announcement from "./Pages/Announcements/Components/Announcement";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="Login" element={<AlternativeLayout />} />
            <Route path="Login" element={<Login />} />
            <Route path="*" element={<NoPages />} />  
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/StudyGuidance" element={<StudyGuidance />} />
            <Route path="/MyLessonPlan" element={<MyLessonPlan />} />
            <Route path="/Announcements" element={<AnnouncementsPage />} />
            <Route path="/Announcements/:id" element={<AnnouncementPage/>} />
            <Route path="/Grades" element={<Grades />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };