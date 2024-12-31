export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white h-16 align-middle shadow-lg">
      <ul className="flex flex-row items-center justify-center gap-6 text-l mt-5">
        <a href="#Home" className="mr-3">
          <img src="/home-button.svg" alt="Home button" className="w-4 h-4" />
        </a>
        <li className="list-none">
          <a href="#Skills">Skills</a>
        </li>
        <li className="list-none">
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li className="list-none">
          <a href="#Experience">Experience</a>
        </li>
        <li className="list-none">
          <a href="#Testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

// <nav className="fixed top-0 left-0 w-full bg-white shadow-sm">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="flex justify-between items-center h-16">
//       {/* Navigation Links */}
//       <div className="hidden md:flex space-x-8">
//         <li className="text-emerald-600 font-medium hover:text-emerald-400 list-none">
//           <a href="#Home">Home</a>
//         </li>
//         <li className="text-emerald-600 font-medium hover:text-emerald-400 list-none">
//           <a href="#AboutMe">About Me</a>
//         </li>
//         <li className="text-emerald-600 font-medium hover:text-emerald-400 list-none">
//           <a href="#Skills">Skills</a>
//         </li>
//         <li className="text-emerald-600 font-medium hover:text-emerald-400 list-none">
//           <a href="#Portfolio">Portfolio</a>
//         </li>
//         <li className="text-emerald-600 font-medium hover:text-emerald-400 list-none">
//           <a href="#Experience">Experience</a>
//         </li>
//         <li className="text-emerald-600 font-medium hover:text-emerald-400 list-none">
//           <a href="#Testimonials">Testimonials</a>
//         </li>
//         <li className="text-emerald-600 font-medium hover:text-emerald-400 list-none">
//           <a href="#Contact">Contact</a>
//         </li>
