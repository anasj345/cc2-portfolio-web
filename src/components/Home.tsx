export default function HomeSection() {
  return (
    <section id="Home">
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <p className="text-gray-600 text-lg mb-2">Hey, I'm</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
              <span className="text-emerald-500"> Anas Juliansyah</span> <br />
              Full-Stack Web Developer
            </h1>
            <p className="text-gray-500 text-lg mt-4">
              A Passionate web developer with expertise in building dynamic,
              responsive, and user-friendly websites.
            </p>
            <button
              href="#AboutMe"
              className="mt-6 bg-emerald-500 text-white py-3 px-6 rounded-lg text-lg font-medium shadow hover:bg-indigo-600"
            >
              Get In Touch
            </button>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img
              src="Profile-Photo-2.jpg"
              alt="Profile Photo"
              className="rounded-lg shadow-lg w-40"
            />
            {/* Sparkles */}
            {/* <div className="absolute -top-4 -right-4 text-emerald-500 animate-pulse">
              ✨
            </div>
            <div className="absolute bottom-4 -left-4 text-emerald-400 animate-ping">
              ✨
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
