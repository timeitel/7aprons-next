import styled from "styled-components";

const MenuContainer = styled.div`
  margin-left: 0;

  @media (min-width: 768px) {
    margin-left: 20%;
  }
`;

const orderSection = {
  background: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("images/ingredients.jpg")`,
  backgroundPosition: "center center",
  backgroundSize: "cover",
};

export const Menu = () => {
  return (
    <>
      <section id="menu" style={orderSection} className="pb-20 overflow-hidden">
        <div className="container mx-auto overflow-hidden pb-48">
          <div>
            <MenuContainer className="flex flex-wrap justify-center md:justify-start items-enter">
              <div className="w-10/12 md:w-4/12 md:px-4 mt-32 md:mt-48">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-invoice text-2xl"></i>
                </div>
                <h3 className="text-3xl mb-2 text-white font-semibold leading-normal">
                  7 Aprons Menu
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white">
                  A choice of two delicious dishes, changing every week for
                  delivery to any office or location in the Perth metropolitan
                  area.{" "}
                </p>
                <div className="block pb-6">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-200 bg-disabled uppercase last:mr-0 mr-2 mt-2">
                    Authentic
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-200 bg-disabled uppercase last:mr-0 mr-2 mt-2">
                    Indonesian
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-200 bg-disabled uppercase last:mr-0 mr-2 mt-2">
                    Malaysian
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-200 bg-disabled uppercase last:mr-0 mr-2 mt-2">
                    Delivery
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-200 bg-disabled uppercase last:mr-0 mr-2 mt-2">
                    Catering
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-200 bg-disabled uppercase last:mr-0 mr-2 mt-2">
                    Family-owned
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap">
                  <a
                    href="#order"
                    className="flex items-center mr-2 mb-2 whitespace-nowrap get-started text-white font-bold px-3 py-4 rounded outline-none focus:outline-none uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    <i
                      className="fas fa-angle-double-down mr-2"
                      aria-hidden="true"
                    ></i>
                    Order Online
                  </a>
                  <a
                    href="images/menu.jpg"
                    target="_blank"
                    className="flex bg-primary mb-2 items-center whitespace-nowrap github-star text-white font-bold px-6 py-4 rounded outline-none focus:outline-none bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  >
                    View Menu
                    <i
                      className="fas fa-external-link-square-alt ml-2"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
            </MenuContainer>
          </div>
          <div id="order"></div>
        </div>
      </section>
    </>
  );
};
