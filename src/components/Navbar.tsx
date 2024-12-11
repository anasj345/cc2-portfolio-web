export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <li className="text-emerald-600 font-medium hover:text-emerald-400 list-none">
              <a href="#Home">Home</a>
            </li>
            <li className="text-emerald-600 font-medium hover:text-emerald-400 list-none">
              <a href="#AboutMe">About Me</a>
            </li>
            <li className="text-emerald-600 font-medium hover:text-emerald-400 list-none">
              <a href="#Skills">Skills</a>
            </li>
            <li className="text-emerald-600 font-medium hover:text-emerald-400 list-none">
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li className="text-emerald-600 font-medium hover:text-emerald-400 list-none">
              <a href="#Experience">Experience</a>
            </li>
            <li className="text-emerald-600 font-medium hover:text-emerald-400 list-none">
              <a href="#Testimonials">Testimonials</a>
            </li>
            <li className="text-emerald-600 font-medium hover:text-emerald-400 list-none">
              <a href="#Contact">Contact</a>
            </li>
            {/* <a
              href="Home.tsx"
              className="text-indigo-500 font-medium hover:text-indigo-700 "
            >
              Home
            </a>
            <a
              href="AboutMe.tsx"
              className="text-gray-600 font-medium hover:text-gray-900"
            >
              About Me
            </a>
            <a
              href="Portfolio.tsx"
              className="text-gray-600 font-medium hover:text-gray-900"
            >
              Portfolio
            </a>
            <a
              href="Testimonials.tsx"
              className="text-gray-600 font-medium hover:text-gray-900"
            >
              Testimonials
            </a> */}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <a
              href="#Contact"
              target="_blank"
              // onClick="window.open(Contact.html, _blank)"
              className="px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg font-medium hover:bg-emerald-400 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
