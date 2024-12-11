export default function AboutMeSection() {
  return (
    <section id="AboutMe">
      <div className="bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
              I'm A
              <span className="text-emerald-500">
                {" "}
                Full-Stack Web Developer
              </span>
            </h1>
            <p className="text-gray-600 text-lg mb-4 mt-4">
              Hello, I'm Anas Juliansyah. I am a web developer with finesse in
              building dynamic, responsive, and user-friendly websites and
              applications. Skilled in technologies like HTML, CSS, JavaScript,
              React, Tailwind, and Node.js. Able to create custom solutions to
              meet unique client needs while ensuring optimal performance and
              scalability. Dedicated to continuous learning and leveraging the
              latest tools to deliver exceptional user experiences.
            </p>
            <p className="text-gray-500 text-lg mt-4">
              A short description emphasizing core skills or services, such as
              "Building scalable and high-performance web solutions for your
              business needs."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
