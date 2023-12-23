import React from "react";

function Package({ img, name, para }) {
  return (
    <div className="max-w-xs max-h-100 bg-white border border-gray-200 rounded-lg shadow overflow-hidden transition-transform transform hover:scale-105">
      <a href="#">
        <img className="w-full h-40 object-cover" src={img} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 overflow-hidden">{para}</p>
      </div>
    </div>
  );
}

export default Package;
