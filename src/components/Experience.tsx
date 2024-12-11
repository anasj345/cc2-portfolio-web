export default function ExperienceSection() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-500 leading-snug">
            Experience
          </h1>
          <p className="text-gray-600 text-lg mb-4 mt-4">
            As a Junior Web Developer, I possess a diverse set of skills that
            enable me to create functional, visually appealing, and
            user-friendly web applications. My technical abilities are
            complemented by a commitment to continuous learning and
            problem-solving, ensuring I deliver quality work in every project.
          </p>
          <div className="flex flex-row gap-2">
            <div className="border rounded text-emerald-500 text-lg flex-1 text-center">
              <h2 className="text-xl">Front-End Skills</h2>
              <p className="text-gray-600">
                <ul className="list-disc list-inside">
                  <li>
                    Proficient in HTML, CSS, and JavaScript to build engaging
                    and interactive user interfaces.
                  </li>
                  <li>
                    Experience with front-end frameworks such as React, Vue.js,
                    or Angular for creating dynamic web applications.
                  </li>
                </ul>
              </p>
            </div>
            <div className="border rounded text-emerald-500 text-lg flex-1 text-center">
              <h2 className="text-xl">Back-End Skills</h2>
              <p className="text-gray-600">
                <ul className="list-disc list-inside">
                  <li>
                    Basic understanding of server-side programming with Node.js
                  </li>
                  <li>
                    Familiarity with database management systems like MySQL and
                    MongoDB.
                  </li>
                </ul>
              </p>
            </div>
            <div className="border rounded text-emerald-500 text-lg flex-1 text-center">
              <h2 className="text-xl">Continuous Learning</h2>
              <p className="text-gray-600">
                <ul className="list-disc list-inside">
                  <li>
                    Passionate about staying up-to-date with the latest trends,
                    tools, and best practices in web development.
                  </li>
                  <li>
                    Eager to take on challenges and expand technical expertise.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
