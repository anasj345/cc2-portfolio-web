import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
// import App from "./App.tsx";
// import Home from "./components/Home.tsx";
import Contact from "./components/Contact.tsx";
import MainLayout from "./layouts/MainLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainLayout />} />
          {/* <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Testimonials" element={<Testimonials />} /> */}
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
