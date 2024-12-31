export default function ContactSection() {
  return (
    <section
      id="Contact"
      className="flex flex-col justify-center bg-gray-100 pt-10 px-32 h-screen text-center"
    >
      <div>
        <p>
          Get in touch to discuss potential collaborations, project inquiries,
          or professional opportunities.
        </p>
        <div className="flex flex-row justify-center gap-5 mt-7 mb-7">
          <a href="https://github.com/anas-anas402" target="_blank">
            <img
              src="logo-github.png"
              alt="logo-github"
              className="h-10 w-10"
            />
          </a>
          <a href="mailto:anas.juliansyah5@gmail.com" target="_blank">
            <img src="logo-email.png" alt="logo-email" className="h-10 w-10" />
          </a>

          <a href="https://www.linkedin.com/in/ma-juliansyah5/" target="_blank">
            <img
              src="logo-linkedin.png"
              alt="logo-linkedin"
              className="h-10 w-10"
            />
          </a>
        </div>
      </div>
      {/* contact form */}
      <div className="border-2 flex flex-col justify-center rounded">
        {/* title */}
        <p className="my-5">Contact Form</p>
        {/* row name & input */}
        <div className="flex flex-col w-full justify-center mb-5 px-5 gap-2">
          <div className="grid grid-cols-[100px_1fr]">
            <label htmlFor="" className="flex justify-between">
              <span>Name</span>
              <span>:</span>
            </label>
            <input type="text" />
          </div>
          <div className="grid grid-cols-[100px_1fr]">
            <label htmlFor="" className="flex justify-between">
              <span>Email</span>
              <span></span>:{" "}
            </label>
            <input type="text" />
          </div>
          <div className="grid grid-cols-[100px_1fr]">
            <label htmlFor="" className="flex justify-between">
              <span>Message</span>
              <span>: </span>
            </label>
            <input type="text" />
          </div>
        </div>
        <button className="border-2 w-20 justify-center m-auto mb-5 rounded hover:bg-gray-200">
          submit
        </button>
      </div>
    </section>
  );
}

// <section id="Contact">
//   <div className="bg-gray-50 text-gray-800">
//     {/* <!-- Container --> */}
//     <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-12">
//       {/* <!-- Header Section --> */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-green-600 ">Contact Me</h1>
//       </div>

//       <div className="flex flex-col items-center">
//         <form className="w-full max-w-lg">
//           {/* <!-- Name Input --> */}
//           <div className="mb-1">
//             <label className="block text-lg font-medium text-gray-700 mb-2">
//               Your Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter your name"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 "
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block text-lg font-medium text-gray-700 mb-2">
//               Your Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 "
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block text-lg font-medium text-gray-700 mb-2">
//               Your Message
//             </label>
//             <textarea
//               id="message"
//               // rows="5"
//               placeholder="Enter your message"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 "
//             ></textarea>
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-green-600 text-white text-lg font-medium py-2 px-6 rounded-lg shadow-lg hover:bg-green-700 "
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
// </section>
