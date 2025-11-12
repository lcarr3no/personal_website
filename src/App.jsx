import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './app/routes/homePage.jsx'
import AboutPage from './app/routes/aboutPage.jsx'
import ProjectsPage from './app/routes/projectsPage.jsx'
import ResumePage from './app/routes/resumePage.jsx'

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route index element={<HomePage />} />
              <Route path={"/about"} element={<AboutPage />} />
              <Route path={"/projects"} element={<ProjectsPage />} />
              <Route path={"/resume"} element={<ResumePage />} />
          </Routes>
      </BrowserRouter>
  )


}
