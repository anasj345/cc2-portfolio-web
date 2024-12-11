import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Contact />
      <footer className="text-center py-6">
        <p className="text-gray-500 text-sm">
          © 2024 Anas Juliansyah. All rights reserved.
        </p>
      </footer>
    </>
  );
}
