export default function SkillsSection() {
  return (
    <section
      id="Skills"
      className="flex flex-col justify-center bg-gray-100 pt-6 px-32 h-screen text-center"
    >
      <div className="flex flex-row ">
        <p className="mb-5">
          As a junior web developer, I posses set of skills that enable me to
          create functional, visually appealing, and user-friendly web
          applications. <br />
          My technical abilities are complemented by commitment to continuous
          learning, ensuring I deliver quality work in every project.
        </p>
      </div>
      <div>
        <ul>
          <li>
            Front End Skills : Technologies like JavaScript, HTML, CSS, React,
            NextJS, etc.
          </li>
          <li>
            Back End Skills : Frameworks and languages like Node.js, Express,
            Django, or Ruby on Rails.
          </li>
          <li>
            DevOps & Tools : Tools used in development, such as Docker, Git,
            Jenkins, AWS, or CI/CD solutions.
          </li>
        </ul>
      </div>
      <div className="flex flex-row justify-evenly mt-10">
        <a href="https://www.javascript.com" target="_blank">
          <img
            src="logo-java-script.png"
            alt="Logo javascript"
            className="h-10 w-10"
          />
        </a>
        <a
          href="https://en.wikipedia.org/wiki/HTML"
          target="_blank"
          id="skill-pic"
        >
          <img src="logo-html.png" alt="Logo html" className="h-10 w-10" />
        </a>
        <a href="https://react.dev/" target="_blank">
          <img src="logo-react.svg" alt="Logo react" className="h-10 w-10" />
        </a>
        <a href="https://nextjs.org/" target="_blank">
          <img src="logo-next-js.svg" alt="Logo nectjs" className="h-10 w-10" />
        </a>
      </div>
    </section>
  );
}

// <section id="Skills">
//   <div className="bg-gray-50 min-h-screen flex items-center justify-center">
//     <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
//       {/* Text Section */}
//       <div className="text-center md:text-left">
//         <h1 className="text-4xl md:text-5xl font-bold text-emerald-500 leading-snug">
//           Skills
//         </h1>
//         <p className="text-gray-600 text-lg mb-4 mt-4">
//           As a Junior Web Developer, I possess a diverse set of skills that
//           enable me to create functional, visually appealing, and
//           user-friendly web applications. My technical abilities are
//           complemented by a commitment to continuous learning and
//           problem-solving, ensuring I deliver quality work in every project.
//         </p>
//         <div className="flex flex-row gap-2">
//           <div className="border rounded text-emerald-500 text-lg flex-1 text-center">
//             <h2 className="text-xl">Front-End Skills</h2>
//             <p className="text-gray-600">
//               <ul className="list-disc list-inside">
//                 <li>
//                   Proficient in HTML, CSS, and JavaScript to build engaging
//                   and interactive user interfaces.
//                 </li>
//                 <li>
//                   Experience with front-end frameworks such as React,
//                   Vue.js, or Angular for creating dynamic web applications.
//                 </li>
//               </ul>
//             </p>
//           </div>
//           <div className="border rounded text-emerald-500 text-lg flex-1 text-center">
//             <h2 className="text-xl">Back-End Skills</h2>
//             <p className="text-gray-600">
//               <ul className="list-disc list-inside">
//                 <li>
//                   Basic understanding of server-side programming with
//                   Node.js
//                 </li>
//                 <li>
//                   Familiarity with database management systems like MySQL
//                   and MongoDB.
//                 </li>
//               </ul>
//             </p>
//           </div>
//           <div className="border rounded text-emerald-500 text-lg flex-1 text-center">
//             <h2 className="text-xl">Continuous Learning</h2>
//             <p className="text-gray-600">
//               <ul className="list-disc list-inside">
//                 <li>
//                   Passionate about staying up-to-date with the latest
//                   trends, tools, and best practices in web development.
//                 </li>
//                 <li>
//                   Eager to take on challenges and expand technical
//                   expertise.
//                 </li>
//               </ul>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
