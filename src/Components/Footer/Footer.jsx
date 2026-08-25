import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
{/* <!-- component --> */}
<footer className="relative bg-cover bg-center bg-no-repeat bg-blend-multiply"
  style={{
    backgroundImage:
      "url('/imge/260618_Hawaiiain_A330_C-e1782705138415.webp')",
  }}>
    <div className= "absolute inset-0  bg-black/60"></div>
  <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 z-10 relative">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <img src="./../../../imge/logo2.avif" alt="logo" className="w-20 md:w-20 lg:w-24 rounded-full " />
        <p className="max-w-xs mt-4 text-sm text-sky-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
        </p>
        <div className="flex mt-8 space-x-6 text-white hover:text-sky-100 transition duration-300">
          <a
            href="https://facebook.com/YourPage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <span className="sr-only">Facebook</span>
            <FaFacebookF size={24} />
          </a>

          <a
            href="https://instagram.com/YourPage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <span className="sr-only">Instagram</span>
            <FaInstagram size={24} />
          </a>

          <a
            href="https://x.com/YourPage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <span className="sr-only">X</span>
            <FaXTwitter size={24} />
          </a>

          <a
            href="https://github.com/YourUserName"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub size={24} />
          </a>

          <a
            href="https://linkedin.com/in/YourUserName"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <h3 className="text-lg font-semibold text-white">
          Company
        </h3>

        <nav className="flex flex-col mt-4 space-y-3 text-sm">
          <Link
            to="/"
            className="text-gray-300 hover:text-sky-400 transition"
          >
            Home
          </Link>

          <Link
            to="/flights"
            className="text-gray-300 hover:text-sky-400 transition"
          >
            Flights
          </Link>

          <Link
            to="/about"
            className="text-gray-300 hover:text-sky-400 transition"
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className="text-gray-300 hover:text-sky-400 transition"
          >
            Contact Us
          </Link>
        </nav>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">
          Services
        </h3>

        <nav className="flex flex-col mt-4 space-y-3 text-sm">
          <Link to="/book-flight" className="text-gray-300 hover:text-sky-400 transition">
            Book Flight
          </Link>

          <Link to="/destinations" className="text-gray-300 hover:text-sky-400 transition">
            Destinations
          </Link>

          <Link to="/offers" className="text-gray-300 hover:text-sky-400 transition">
            Special Offers
          </Link>

          <Link to="/check-in" className="text-gray-300 hover:text-sky-400 transition">
            Online Check-in
          </Link>
        </nav>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">
          Support
        </h3>

        <nav className="flex flex-col mt-4 space-y-3 text-sm">
          <Link to="/faq" className="text-gray-300 hover:text-sky-400 transition">
            FAQ
          </Link>

          <Link to="/baggage" className="text-gray-300 hover:text-sky-400 transition">
            Baggage Policy
          </Link>

          <Link to="/privacy" className="text-gray-300 hover:text-sky-400 transition">
            Privacy Policy
          </Link>

          <Link to="/terms" className="text-gray-300 hover:text-sky-400 transition">
            Terms & Conditions
          </Link>
        </nav>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">
          Travel Policies
        </h3>

        <nav className="flex flex-col mt-4 space-y-3 text-sm">
          <Link to="/baggage-policy" className="text-gray-300 hover:text-sky-400 transition">
            Baggage Policy
          </Link>

          <Link to="/cancellation" className="text-gray-300 hover:text-sky-400 transition">
            Cancellation Policy
          </Link>

          <Link to="/refund-policy" className="text-gray-300 hover:text-sky-400 transition">
            Refund Policy
          </Link>

          <Link to="/travel-terms" className="text-gray-300 hover:text-sky-400 transition">
            Travel Terms
          </Link>
        </nav>
      </div>
      </div>
    </div>
    <p className="mt-8 text-lg text-white">
      © 2026 Made With By Elpop All Right Reserved
    </p>
  </div>
</footer>
    </>
  )
}

export default Footer