import "./Home.css";

export default function HomeSection() {
  return (
    <section id="Home" className="flex flex-col h-screen">
      <div className="flex flex-row items-center justify-between bg-white px-32 h-screen">
        <div>
          <p className="text-xl mb-5">Hey, I'm</p>
          <p className="text-5xl mb-5">Anas Juliansyah</p>
          <p className="text-xl">
            A passionate web developer with expertise in building dynamic,
            <br />
            responsive, and user-friendly websites.
          </p>
        </div>
        <div className="">
          <img
            src="profile-photo.png"
            alt="Profile photo"
            className="w-48 h-64 object-cover"
          />
        </div>
      </div>
      <div>
        <a href="#AboutMe" className="arrow-container">
          <div className="arrow"></div>
          <div className="arrow"></div>
          <div className="arrow"></div>
        </a>
      </div>
    </section>
  );
}
// <section id="Home">
//   <div className="bg-gray-50 min-h-screen flex items-center justify-center">
//     <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
//       {/* Text Section */}
//       <div className="text-center md:text-left">
//         <p className="text-gray-600 text-lg mb-2">Hey, I'm</p>
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
//           <span className="text-emerald-500"> Anas Juliansyah</span> <br />
//           Full-Stack Web Developer
//         </h1>
//         <p className="text-gray-500 text-lg mt-4">
//           A Passionate web developer with expertise in building dynamic,
//           responsive, and user-friendly websites.
//         </p>
//         <a
//           href="#AboutMe"
//           className="mt-6 bg-emerald-500 text-white py-3 px-6 rounded-lg text-lg font-medium shadow hover:bg-indigo-600"
//         >
//           Get In Touch
//         </a>
//       </div>

//           {/* Image Section */}
//           <div className="relative">
//             <img
//               src="Profile-Photo-2.jpg"
//               alt="Profile Photo"
//               className="rounded-lg shadow-lg w-40"
//             />
//             {/* Sparkles */}
//             {/* <div className="absolute -top-4 -right-4 text-emerald-500 animate-pulse">
//               ✨
//             </div>
//             <div className="absolute bottom-4 -left-4 text-emerald-400 animate-ping">
//               ✨
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
