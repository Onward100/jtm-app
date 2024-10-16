import React from "react";
import ImageProps from "./ImageProps";
import BodyProps from "./BodyProps";
import { buttons6 } from "./ButtonProps";

const Event = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728608335/Frame_828_bmfvuw.png";
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
              header="Event Coverage"
              paragraph="Capture the spirit and impact of your Christian events with our professional coverage services. From intimate church gatherings to large-scale conferences, we bring your events to life for both attendees and those unable to be there in person."
              button="Request Service"

            />
          </div>
          <div className=" grid grid-cols-2 gap-8 min-w-fit">
            {buttons6.map((item) => {
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

export default Event;
