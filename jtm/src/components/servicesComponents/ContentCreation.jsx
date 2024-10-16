import React from "react";
import ImageProps from "./ImageProps";
import BodyProps from "./BodyProps";
import { buttons4 } from "./ButtonProps";

const ContentCreation = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598028/hzm18n7gqirt8nd0wmik.png";
  return (
    <section className="w-full bg-black ">
      <div className="w-full lg:w-10/12  mx-auto flex flex-col-reverse lg:flex-row items-center  justify-center gap-10 lg:gap-8 lg:p-10">
        {/* Left texts */}
        <div className="flex flex-col w-11/12 mx-auto lg:w-1/2 gap-10">
          <div>
            <BodyProps
              header="Content Creation Services"
              paragraph="Bring your message to life with our professional content creation services, such as video production, audio production, graphic design, and copywriting. We specialize in crafting compelling, faith-inspired media content for Christian organizations, artists, and events."
              button="Request Service"

            />
          </div>
          <div className=" grid grid-cols-2 gap-8 min-w-fit">
            {buttons4.map((item) => {
                return (
                    <ul key={item.id}>
                        <li to={item.path} className="bg-white text-center rounded-xl py-3 text-inter font-normal text-black">{item.text}</li>
                    </ul>
                )
            })}
          </div>
        </div>
         {/* Right side (Image) */}
         <div className="w-11/12 mx-auto lg:w-1/2">
          <ImageProps img={image}/>
        </div>
      </div>
    </section>
  );
};

export default ContentCreation;
