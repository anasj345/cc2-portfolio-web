export default function TestimonialsSection() {
  return (
    <section id="Testimonials">
      <div className="bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-500 leading-snug">
              Testimonials
            </h1>
            <div className="flex flex-row gap-2">
              <div className="border rounded border-gray-50 text-emerald-500 text-lg flex-1 text-center">
                <h2 className="text-xl">— Sarah M., Marketing Director</h2>
                <br />
                <p className="text-gray-600">
                  "I had the pleasure of working with Anas on a company profile
                  website, and I was impressed by their enthusiasm and attention
                  to detail. As a junior web developer, they showed incredible
                  initiative in learning new technologies and ensuring the
                  project met all our expectations. The site was delivered on
                  time, and the quality of the code was top-notch. I’m confident
                  that Anas has a bright future in web development!"
                </p>
              </div>
              <div className="border rounded border-gray-50 text-emerald-500 text-lg flex-1 text-center">
                <h2 className="text-xl">— John D., Founder & CEO</h2>
                <br />
                <p className="text-gray-600">
                  "I hired Anas to develop a blog platform for my tech startup,
                  and they exceeded all my expectations. They were eager to
                  collaborate, bringing fresh ideas and a strong understanding
                  of both front-end and back-end development. The website is
                  user-friendly, responsive, and performs flawlessly. I'm
                  thrilled with the final product and look forward to working
                  with them again in the future."
                </p>
              </div>
              <div className="border rounded border-gray-50 text-emerald-500 text-lg flex-1 text-center">
                <h2 className="text-xl">— David R., Senior Web Developer</h2>
                <br />
                <p className="text-gray-600">
                  "As a senior developer, I worked closely with Anas on several
                  web development projects. They possess a solid grasp of
                  front-end technologies and have a passion for learning and
                  growing. What stands out most is their ability to tackle
                  challenges head-on and ask the right questions when needed.
                  Anas is a dedicated, hardworking developer with a lot of
                  potential to make an impact in the tech world."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
