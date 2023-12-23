import React from "react";

function Servicecard({ name, img, para, style, imgstyle }) {
  // Function to add line breaks after every two words
  const addLineBreaks = (text) => {
    const words = text.split(" ");
    const result = [];
    for (let i = 0; i < words.length; i += 2) {
      result.push(words.slice(i, i + 2).join(" "));
    }
    return result.join("<br />");
  };

  // Format the para prop with line breaks
  const formattedPara = addLineBreaks(para);

  return (
    <div>
      <div className={`${style} transition-transform transform hover:scale-105`}>
        <div className="flex flex-col ml-3 mb-[5rem]">
          <p className="font-montserrat text-[24px] font-semibold leading-29 tracking-wider text-white">
            {name}
          </p>
          <p
            className="font-sans text-base font-semibold leading-tight tracking-tight text-white"
            dangerouslySetInnerHTML={{ __html: formattedPara }}
          />
        </div>
        <img src={img} className={imgstyle} alt={name} />
      </div>
    </div>
  );
}

export default Servicecard;
