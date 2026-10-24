import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";

export default function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/adityapratap-singh") {
      document.title = "Adityapratap Singh — Founder & CEO, ADEX-IN";
      document.querySelector('meta[name="description"]')?.setAttribute("content",
        "Adityapratap Singh, Founder & CEO of ADEX-IN. Software, machine learning, and connected systems — from experiment to working prototype.");
    } else {
      document.title = "ADEX-IN — See Differently. Build Differently.";
      document.querySelector('meta[name="description"]')?.setAttribute("content",
        "ADEX-IN is a technology and innovation platform building products that empower people with disabilities around the world.");
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/adityapratap-singh" element={<Profile />} />
    <Route path="*" element={<main className="container not-found"><h1>Page not found</h1><Link to="/">Return to ADEX-IN</Link></main>} />
  </Routes>;
}
