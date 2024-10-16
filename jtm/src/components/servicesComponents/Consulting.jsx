import React from "react";
import ImageProps from "./ImageProps";
import BodyProps from "./BodyProps";
import { buttons2 } from "./ButtonProps";

const Consulting = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598037/h7lwxwvfhbb3xq2mtako.png";
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
              header="Consulting and Training"
              paragraph="Empower your organization with cutting-edge media strategies and skills. Our expert consulting and training services are tailored for churches, ministries, and Christian organizations seeking to enhance their digital presence and impact in content creation, social media management, and audience engagement."
              button="Request Service"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 min-w-fit">
            {buttons2.map((item) => {
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

export default Consulting;
