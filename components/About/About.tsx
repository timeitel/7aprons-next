export const About = () => {
  return (
    <section
      id="about"
      className="md:pt-40 pb-16 md:pb-32 relative bg-blueGray-100"
      style={{ paddingTop: "18rem" }}
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-10/12 md:w-6/12 lg:w-4/12 md:px-4 mr-auto ml-auto -mt-32">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
              <img
                alt="Our story"
                src="images/our-story.jpg"
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="text-blueGray-700 fill-current"
                  ></polygon>
                </svg>
                <h4 className="text-xl font-bold text-white">
                  The 7 humans behind the aprons
                </h4>
                <p className="text-md font-light mt-2 text-white">
                  We want to bring a fusion of the fragrant street food,
                  together with the warmth of traditional home-cooked meals to
                  transport people back to the tastes of Asia.
                </p>
              </blockquote>
            </div>
          </div>

          <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col mt-4">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fas fa-utensils"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      Signature Dishes
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      From Javanese, to Hainan, to peanut satay sauce. All
                      varieties of Asian dishes can be found at 7Aprons
                      throughout the changing, monthly menu.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fas fa-truck"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">Delivery</h6>
                    <p className="mb-4 text-blueGray-500">
                      Delivering anywhere within the Perth metropolitan area
                      each week.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 px-4 hidden md:block">
                <div className="relative flex flex-col min-w-0 mt-4">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fas fa-users"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">Catering</h6>
                    <p className="mb-4 text-blueGray-500">
                      Contact us for catering and food options.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">Perth Locals</h6>
                    <p className="mb-4 text-blueGray-500">
                      We want to share the warmth of traditional home-cooked
                      meals to transport people back to the tastes of Asia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
