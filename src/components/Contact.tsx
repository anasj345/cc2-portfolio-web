export default function ContactSection() {
  return (
    <section id="Contact">
      <div className="bg-gray-50 text-gray-800">
        {/* <!-- Container --> */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-12">
          {/* <!-- Header Section --> */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-green-600 ">Contact Me</h1>
          </div>

          <div className="flex flex-col items-center">
            <form className="w-full max-w-lg">
              {/* <!-- Name Input --> */}
              <div className="mb-1">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 "
                />
              </div>

              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 "
                />
              </div>

              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  // rows="5"
                  placeholder="Enter your message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 "
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 text-white text-lg font-medium py-2 px-6 rounded-lg shadow-lg hover:bg-green-700 "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
