import React from "react";
import ImageProps from "./ImageProps";
import BodyProps from "./BodyProps";
import { buttons5 } from "./ButtonProps";

const Educational = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598031/gux3ww8gvq1jhrrz25k2.png";
  return (
    <section className="w-full bg-black ">
      <div className="w-full lg:w-10/12 mx-auto flex flex-col lg:flex-row items-center  justify-center gap-10 lg:gap-8 lg:p-10">
        {/* left side (Image) */}
        <div className="w-11/12 mx-auto lg:w-1/2 ">
          <ImageProps img={image}/>
        </div>
        {/* Right texts */}
        <div className="flex flex-col w-11/12 mx-auto lg:w-1/2 gap-10">
          <div>
            <BodyProps
              header="Educational Resources"
              paragraph="Nurture your faith and foster your spiritual growth with our comprehensive collection of Christian educational materials. We offer a range of resources designed to deepen understanding, encourage devotion, and support spiritual development for individuals, groups, and churches."
              button="Request Service"

            />
          </div>
          <div className=" grid grid-cols-2 gap-8 min-w-fit">
            {buttons5.map((item) => {
                return (
                    <ul key={item.id}>
                        <li to={item.path} className="bg-white w-auto text-center rounded-xl py-3 text-inter font-normal text-black">{item.text}</li>
                    </ul>
                )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educational;
