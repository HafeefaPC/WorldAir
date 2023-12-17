import React from "react";

function Package({ name, img, para }) {
    return (
        <div className="flex justify-center items-center rounded-3xl bg-white h-60 mx-4 mb-4">
            <div>
          <img
            src={img}
            className="w-[233px] h-[211px] absolute mt-[3px] lg:mr-[27rem] sm:mr-[22rem] rounded-3xl"
            alt={name}
          />
          </div>
          <div className="flex ml-3 mt-5 lg:gap-0">
            <p className="font-montserrat text-[24px] font-semibold leading-29 tracking-wider ml-[18rem] text-white mb-[1rem]">
              {name}
            </p>
            <p className="font-sans text-base font-semibold leading-tight tracking-tight ml-[18rem] text-[#94a3b8]">
              {para}
            </p>
          </div>
        </div>
      );
    }
    

export default Package;
