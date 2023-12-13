import React from 'react'

const navbar = () => {
  return (
   

<footer className="bg-white rounded-lg shadow ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between mx-auto">
  <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-700 sm:mb-0">
    <li>
      <a href="#" className="hover:underline me-4 md:me-6">About Us</a>
    </li>
    <li>
      <a href="#" className="hover:underline me-4 md:me-6">Services</a>
    </li>
    <li>
      <a href="#" className="hover:underline me-4 md:me-6">Gallery</a>
    </li>
    <li>
      <a href="#" className="hover:underline">Contact Us</a>
    </li>
  </ul>
</div>

        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center ">© 2023 <a href="https://flowbite.com/" class="hover:underline">Worls Air</a>.Privacy.Terms.Sitemap</span>
    </div>
</footer>
  )
}

export default navbar
