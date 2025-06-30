"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full flex justify-center   bg-transparent">
      <motion.div
        className="bg-gray-800 text-white rounded-full mt-10 sm:max-w-fit sm:px-20 md:py-3 mx-2 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <motion.ul
          className="flex py-5 px-2 sm:flex sm:justify-center lg:gap-10 "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className="cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(59, 130, 246, 0.5)",
              }}
            >
              <Link
                href={item.href}
                className="font-semibold text-base px-2 py-2 md:text-2xl sm:text-xl rounded-md lg:text-3xl  hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
