import React from "react";
import logo from "../../assets/logo.png";
import { RiTwitterLine } from "react-icons/ri";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
const navbar = () => {
  return (
    <div class="bg-black  shadow w-full  ">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <img src={logo} className="mx-auto block w-1/3 " />
        <div class="flex justify-center items-center">
          <ul class="flex space-x-4 text-sm font-medium text-gray-500">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6 ">
                <RiTwitterLine />
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
              <FiYoutube />
              </a>
            </li>
          </ul>
        </div>

        <div class="flex justify-center items-center">
          <ul class="flex space-x-4 text-sm font-medium text-gray-500">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Services
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <hr class="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center ">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            World Air
          </a>
          . Privacy.Terms.Sitemap
        </span>
      </div>
    </div>
  );
};

export default navbar;
