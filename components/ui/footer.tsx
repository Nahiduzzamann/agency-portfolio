import React from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhone, FaGlobe, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-2">
            {/* Logo */}
            <Link href="/" className="inline-block" aria-label="Cruip">
              <Image height={40} width={40} src={require('../../public/sjs.svg')} alt="logo"></Image>
            </Link>
          </div>
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="text-gray-400">
                SJS Freelancing & IT Institute is a leading software development
                company specializing in custom and offshore software
                development, professional outsourcing, and consultancy services.
                We provide total IT solutions for businesses, including
                automation, technical support, consultancy, and training. With a
                track record of successful software development, installation,
                and implementation, we ensure our clients receive tailored
                solutions and comprehensive after-sales support.
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Products</h6>
                <ul>
                  <li className="mb-1">
                    <p className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                      Web Development
                    </p>
                  </li>
                  <li className="mb-1">
                    <p className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                      Apps Development
                    </p>
                  </li>
                  <li className="mb-1">
                    <p className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                      Development Training
                    </p>
                  </li>
                  <li className="mb-1">
                    <p className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                      System Management
                    </p>
                  </li>
                  <li className="mb-1">
                    <p className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                      UI/UX Design
                    </p>
                  </li>
                  <li className="mb-1">
                    <p className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                      Logo/Benner Design
                    </p>
                  </li>
                  <li className="mb-1">
                    <p className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                      IT Solutions
                    </p>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">DHAKA OFFICE</h6>
                <ul>
                  <li className="mb-1 flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    <p className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                      House - 381, Road - 28, New DOHS, Mohakhali, Dhaka-1206
                    </p>
                  </li>
                  <li className="mb-1 flex items-center">
                    <FaPhone className="mr-2" />
                    <p className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                      Contact No: +8801713-360934
                    </p>
                  </li>
                  <li className="mb-1 flex items-center">
                    <FaGlobe className="mr-2" />
                    <p className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                      Web: www.sjsfreelancing.com
                    </p>
                  </li>
                  <li className="mb-1 flex items-center">
                    <FaEnvelope className="mr-2" />
                    <p className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                      contact@sjs.com
                    </p>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">
                  RANGPUR OFFICE
                </h6>
                <ul>
                  <li className="mb-1 flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    <p className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                      House- 65, Road -2, R.K Road Islambag,Rangpur
                    </p>
                  </li>
                  <li className="mb-1 flex items-center">
                    <FaPhone className="mr-2" />
                    <p className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                      Contact No: +8801713-361734
                    </p>
                  </li>
                  <li className="mb-1 flex items-center">
                    <FaGlobe className="mr-2" />
                    <p className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                      sjs.freelancing@gmail.com
                    </p>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              
              <li className="ml-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100092527967098"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Facebook"
                  target="blank"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </a>
              </li>              
              {/* <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Linkedin"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li> */}
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">
              &copy; {new Date().getFullYear()} All rights reserved. SJS
              Freelancing & It Institute.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
