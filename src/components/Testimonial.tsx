export default function TestimonialSection() {
  return (
    <section
      id="Testimonial"
      className="flex flex-col justify-center bg-white px-32 h-screen text-center"
    >
      <div className="pt-8 mb-5">
        <p>Testimonial</p>
      </div>
      <div className="flex flex-row gap-5 max-h-svh">
        <div className="flex flex-col border-2 overflow-hidden rounded-2xl w-1/3 bg-gray-100">
          <img
            src="portfolio-1.png"
            alt="Porfolio 1 Photo"
            className="h-1/3 w-full b-2 p-2 rounded-xl object-cover"
          />
          <div className="mt-5 px-2">
            <p className="">
              <b>Personal Portfolio Website</b>
            </p>
            <br />
            <p className="text-sm">
              {" "}
              Lorem ipsum odor amet, consectetuer adipiscing elit. Lobortis
              neque himenaeos consequat nostra purus tellus, lacinia hac.
              Suspendisse ante nisi penatibus laoreet eleifend viverra.
            </p>
          </div>
        </div>
        <div className="flex flex-col border-2 overflow-hidden rounded-2xl w-1/3 bg-gray-100">
          <img
            src="portfolio-2.png"
            alt="Porfolio 2 Photo"
            className="h-1/3 w-full b-2 p-2 rounded-xl object-cover"
          />
          <div className="mt-5 px-2">
            <p className="">
              <b>Blog</b>
            </p>
            <br />
            <p className="text-sm">
              {" "}
              Lorem ipsum odor amet, consectetuer adipiscing elit. Lobortis
              neque himenaeos consequat nostra purus tellus, lacinia hac.
              Suspendisse ante nisi penatibus laoreet eleifend viverra.
            </p>
          </div>
        </div>
        <div className="flex flex-col border-2 overflow-hidden rounded-2xl w-1/3 bg-gray-100">
          <img
            src="portfolio-3.png"
            alt="Porfolio 3 Photo"
            className="h-1/3 w-full p-2 rounded-xl object-cover"
          />
          <div className="mt-5 px-2">
            <p className="">
              <b>Company Profile</b>
            </p>
            <br />
            <p className="text-sm">
              {" "}
              Lorem ipsum odor amet, consectetuer adipiscing elit. Lobortis
              neque himenaeos consequat nostra purus tellus, lacinia hac.
              Suspendisse ante nisi penatibus laoreet eleifend viverra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
