import AboutMe from "../components/AboutMe.tsx";
import Contact from "../components/Contact.tsx";
import Experience from "../components/Experience.tsx";
import Home from "../components/Home.tsx";
import Navbar from "../components/Navbar.tsx";
import Portfolio from "../components/Portfolio.tsx";
import Skills from "../components/Skills.tsx";
import Testimonial from "../components/Testimonial.tsx";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimonial />
      <Contact />
      <footer className="text-center py-6">
        <p className="text-gray-500 text-sm">© 2024 Anas Juliansyah.</p>
      </footer>
    </>
  );
}
