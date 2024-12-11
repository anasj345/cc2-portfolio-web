export default function PortfolioSection() {
  return (
    <section id="Portfolio">
      <div className="bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-500 leading-snug">
              Portfolio
            </h1>
            <p className="text-gray-600 text-lg mb-4 mt-4">
              As a Junior Web Developer, I possess a diverse set of skills that
              enable me to create functional, visually appealing, and
              user-friendly web applications. My technical abilities are
              complemented by a commitment to continuous learning and
              problem-solving, ensuring I deliver quality work in every project.
            </p>
            <div className="flex flex-row gap-2">
              <div className="border rounded border-gray-50 text-emerald-500 text-lg flex-1 text-center">
                <h2 className="text-xl">Personal Portfolio Website</h2>
                <p className="text-gray-600">
                  A responsive, single-page portfolio showcasing my skills and
                  projects, built with React and styled-components.
                </p>
              </div>
              <div className="border rounded border-gray-50 text-emerald-500 text-lg flex-1 text-center">
                <h2 className="text-xl">Blog</h2>
                <p className="text-gray-600">
                  Created a lifestyle blog with a custom CMS integration. The
                  project involved implementing a user-friendly admin panel for
                  content updates and designing a clean, engaging layout.
                </p>
              </div>
              <div className="border rounded border-gray-50 text-emerald-500 text-lg flex-1 text-center">
                <h2 className="text-xl">Company Profile Website</h2>
                <p className="text-gray-600">
                  Designed and developed a sleek company profile website for a
                  startup, showcasing their services, team, and portfolio. The
                  site features smooth animations and mobile responsiveness,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
