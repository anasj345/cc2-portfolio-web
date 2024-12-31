export default function ExperienceSection() {
  return (
    <section
      id="Experience"
      className="flex flex-col justify-center bg-gray-100 pt-14 px-32 h-screen text-center"
    >
      <div className="pt-32">
        <p>Experience</p>
      </div>
      <div className="flex flex-row mt-10 gap-5">
        <div className="flex flex-col justify-center border-2 rounded-2xl w-1/3 h-2/3 bg-white">
          <img
            src="logo-finshot.png"
            alt="Experience 1 Photo"
            className="h-1/5 justify-center p-2 rounded-full object-contain"
          />
          <p className="">
            <a href="https://www.linkedin.com/company/finshot-inc/posts/?feedView=all">
              <b className="">FinShot Inc</b>
            </a>
          </p>
          <p className="">Full-stack Developer</p>
          <br />
          <p className="text-sm">
            {" "}
            Lorem ipsum odor amet, consectetuer adipiscing elit. Lobortis neque
            himenaeos consequat nostra purus tellus, lacinia hac. Suspendisse
            ante nisi penatibus laoreet eleifend viverra.
          </p>
        </div>
        <div className="flex flex-col justify-center border-2 rounded-2xl w-1/3 h-2/3 bg-white">
          <img
            src="logo-tesla.svg"
            alt="Experience 2 Photo"
            className="h-1/3 justify-center p-2 rounded-full object-contain"
          />
          <p className="">
            <a href="https://www.tesla.com/">
              <b className="">Tesla</b>
            </a>
          </p>
          <p className="">Software Engineer</p>
          <br />
          <p className="text-sm">
            {" "}
            Lorem ipsum odor amet, consectetuer adipiscing elit. Lobortis neque
            himenaeos consequat nostra purus tellus, lacinia hac. Suspendisse
            ante nisi penatibus laoreet eleifend viverra.
          </p>
        </div>
        <div className="flex flex-col justify-center border-2 rounded-2xl w-1/3 h-2/3 bg-white">
          <img
            src="logo-google.png"
            alt="Experience 3 Photo"
            className="h-1/3 justify-center p-2 rounded-full object-contain"
          />
          <p className="">
            <a href="https://about.google/intl/ALL_id/">
              <b className="">Google</b>
            </a>
          </p>
          <p className="">Developer</p>
          <br />
          <p className="text-sm">
            {" "}
            Lorem ipsum odor amet, consectetuer adipiscing elit. Lobortis neque
            himenaeos consequat nostra purus tellus, lacinia hac. Suspendisse
            ante nisi penatibus laoreet eleifend viverra.
          </p>
        </div>
      </div>
    </section>
  );
}
// <div className="bg-gray-50 min-h-screen flex items-center justify-center">
//   <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
//     {/* Text Section */}
//     <div className="text-center md:text-left">
//       <h1 className="text-4xl md:text-5xl font-bold text-emerald-500 leading-snug">
//         Experience
//       </h1>
//       <p className="text-gray-600 text-lg mb-4 mt-4">
//         As a Junior Web Developer, I possess a diverse set of skills that
//         enable me to create functional, visually appealing, and
//         user-friendly web applications. My technical abilities are
//         complemented by a commitment to continuous learning and
//         problem-solving, ensuring I deliver quality work in every project.
//       </p>
//       <div className="flex flex-row gap-2">
//         <div className="border rounded text-emerald-500 text-lg flex-1 text-center">
//           <h2 className="text-xl">Front-End Skills</h2>
//           <p className="text-gray-600">
//             <ul className="list-disc list-inside">
//               <li>
//                 Proficient in HTML, CSS, and JavaScript to build engaging
//                 and interactive user interfaces.
//               </li>
//               <li>
//                 Experience with front-end frameworks such as React, Vue.js,
//                 or Angular for creating dynamic web applications.
//               </li>
//             </ul>
//           </p>
//         </div>
//         <div className="border rounded text-emerald-500 text-lg flex-1 text-center">
//           <h2 className="text-xl">Back-End Skills</h2>
//           <p className="text-gray-600">
//             <ul className="list-disc list-inside">
//               <li>
//                 Basic understanding of server-side programming with Node.js
//               </li>
//               <li>
//                 Familiarity with database management systems like MySQL and
//                 MongoDB.
//               </li>
//             </ul>
//           </p>
//         </div>
//         <div className="border rounded text-emerald-500 text-lg flex-1 text-center">
//           <h2 className="text-xl">Continuous Learning</h2>
//           <p className="text-gray-600">
//             <ul className="list-disc list-inside">
//               <li>
//                 Passionate about staying up-to-date with the latest trends,
//                 tools, and best practices in web development.
//               </li>
//               <li>
//                 Eager to take on challenges and expand technical expertise.
//               </li>
//             </ul>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
