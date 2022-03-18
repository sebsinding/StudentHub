
import Layout from "./Components/Layouts/Layout";
import CalendarPage from "./Pages/Calendar/CalendarPage";
import MyLessonPlanPage from "./Pages/MyLessonPlan/MyLessonPlanPage";
import AnnouncementsPage from "./Pages/Announcements/AnnouncementsPage";
import CourseDatabasePage from "./Pages/CourseDatabase/CourseDatabasePage";
import StudyGuidancePage from "./Pages/StudyGuidance/StudyGuidancePage";
import GradesPage from "./Pages/Grades/GradesPage";
import NoPages from "./Pages/NoPages/NoPages";
import LoginPage from "./Pages/Login/LoginPage";
import AlternativeLayout from "./Components/Layouts/AlternativeLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import customTheme from "./Pages/theme";

export default function App() {
    return (
      <ThemeProvider theme = {customTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<AlternativeLayout />} />
            <Route path="Login" element={<LoginPage />} />
            <Route path="*" element={<NoPages />} />  
          <Route path="/" element={<Layout />}>
            <Route index element={<CalendarPage />} />
            <Route path="StudyGuidance" element={<StudyGuidancePage />} />
            <Route path="MyLessonPlan" element={<MyLessonPlanPage />} />
            <Route path="Announcements" element={<AnnouncementsPage />} />
            <Route path="CourseDatabase" element={<CourseDatabasePage />} />
            <Route path="Grades" element={<GradesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    );
  };