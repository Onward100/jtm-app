import React from "react";
import ImageProps from "./ImageProps";
import BodyProps from "./BodyProps";
import { button } from "./ButtonProps";

const Adverts = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598022/olgfq6epfbn5j82pdyie.png";
  return (
    <section className="w-full bg-black ">
      <div className="w-full lg:w-10/12 mx-auto flex flex-col lg:flex-row items-center  justify-center  gap-8 lg:gap-0 lg:p-10">
        {/* left side (Image) */}
        <div className="w-11/12 mx-auto lg:w-1/2 ">
          <ImageProps img={image}/>
        </div>
        {/* Right texts */}
        <div className="flex flex-col w-11/12 mx-auto lg:w-1/2 gap-10">
          <div>
            <BodyProps
              header="Advertising and Sponsorship"
              paragraph="Grow your brand's visibility and reach your target audience through our diverse advertising mediums such as our radio, TV, podcasts, blogs, newsletters and sponsorship of our shows, segments and events "
              button="Request Service"
            />
          </div>
          <div className=" grid grid-cols-2 gap-8 min-w-fit">
            {button.map((item) => {
                return (
                    <ul key={item.id}>
                        <li to={item.path} className="bg-white text-center rounded-xl py-3 text-inter font-normal text-black">{item.text}</li>
                    </ul>
                )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adverts;
