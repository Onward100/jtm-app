import React from "react";

const YellowBlogHero = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728617032/Frame_171_gngv6f.png";
  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className="bg-cover bg-center bg-no-repeat w-full h-screen"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-10 items-end "></div>

      <div className="relative z-20 flex flex-col justify-end items-start h-full  w-9/12 mx-auto space-y-6">
        <h5 className="font-inter font-normal text-base text-[#cfa01f]">
          Featured
        </h5>
        <div className="flex items-center justify-between">
          <h2 className="font-monstserrat font-normal text-3xl text-white w-8/12">
            Consequat vulputate elit velit sit hendrerit. Habitant viverra massa
            arcu etiam. Lorem sed condimentum sed pellentesque
          </h2>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5rem"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
              ></path>
            </svg>
          </div>
        </div>
        <h5 className="text-[#FCFCFC] text-base font-normal font-inter w-1/2">
          Consequat vulputate elit velit sit hendrerit. Habitant viverra massa
          arcu etiam. Lorem sed condimentum sed pellentesque
        </h5>
      </div>
    </section>
  );
};

export default YellowBlogHero;
