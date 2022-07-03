import React from "react";
import { Routes, Route } from "react-router-dom";
//component
import Dashboard from "../components/Dashboard";
import Courses from "../components/Courses";
import Students from "../components/Students";
import Exams from "../components/Exams";
import Results from "../components/Results";
import Notifications from "../components/Notifications";
import Notice from "../components/Notice";
import Live from "../components/Live";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/students" element={<Students />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/results" element={<Results />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/live" element={<Live />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </>
  );
};

export default Router;
