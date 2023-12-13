import React from "react";
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className="shadow-md w-full fixed  top-0 left-0">
      <div className="md:flex bg-white py-4 justify-between">
        <div>
        <a
          href="https://flowbite.com/"
          class="flex items-center space-x-4 rtl:space-x-reverse"
        >
          <img
            src={logo}
            className="w-full"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap ">
            WorldAir
          </span>
        </a>
        </div>
          
        <div class="hidden w-full md:block md:w-auto" id="navbar-default ">
          <ul class="font-medium flex flex-col p-4 md:p-3 ml-3  mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                aria-current="page"
              >
               Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                Contact Us
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
