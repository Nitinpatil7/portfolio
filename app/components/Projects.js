"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const Projects = () => {
  const projects = [
    {
      image: "/mindstream.png",
      title: "MindStream - Blog Application",
      Desc: "A MindStream is Blog Application Using Mern Stack With some Extra Packages...",
      tags: [
        "ReactJs",
        "Express",
        "Mongodb",
        "TailwindCss",
        "reactQill -Text Editor",
        "Responsive",
        "JWT- Authentication",
        "Dynamic Routes",
      ],
      link: "https://mindstream-nitinpatil7s-projects.vercel.app/login",
      github: "https://github.com/Nitinpatil7/blog-application",
      videolink:
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7303704852608487424?compact=1",
    },
    {
      image: "/trackmycash.png",
      title: "TrackMyCash - Expense Tracker Application",
      Desc: "A trackMyCash is Expense Tracker Application Using Mern Stack With some Extra Packages...",
      tags: [
        "ReactJs",
        "Express",
        "Mongodb",
        "TailwindCss",
        "Charts.js",
        "Responsive",
        "JWT- Authentication",
        "Dynamic Routes",
        "Dashboard",
      ],
      link: "https://www.linkedin.com/posts/nitin-patil-9a9866281_mernstack-fullstackdevelopment-expensetracker-activity-7297874380393529344-HAqq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESmBBEBxQMIZvd4euD9hIeBEkS56HEEhvU",
      github: "https://github.com/Nitinpatil7/expense-tracker-application",
      videolink:
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7297874027132444672?compact=1",
    },
    {
      image: "/langloop.png",
      title: "LangLoop - Duolingo frontEnd Clone",
      Desc: "A Langloop is Quize App Using ReactJS",
      tags: [
        "ReactJs",
        "TailwindCss",
        "Responsive",
        "ContextAPI",
        "Framer-Motion",
      ],
      link: "https://langloop-learning.vercel.app",
      github: "https://github.com/Nitinpatil7/HACKTHON",
      videolink:
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7336260921612197888?compact=1",
    },
    {
      image: "/snaptree.png",
      title: "SanpTree - LinkTree Clone",
      Desc: "A SnapTree LinkTree Clone Using NextJs and MongoDB and Dynamic Routes",
      tags: ["NextJs", "TailwindCss", "Responsive"],
      link: "https://www.linkedin.com/posts/nitin-patil-9a9866281_nextjs-mongodb-webdevelopment-activity-7289256863873851392-Z9mX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESmBBEBxQMIZvd4euD9hIeBEkS56HEEhvU",
      github: "",
      videolink:
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7289256780704997376?compact=1",
    },
  ];
  const [selected, setselected] = useState(null);
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selected]);

  return (
    <>
      <div id="Projects" className="max-h-fit w-full text-white">
        <motion.h1
          className="text-5xl font-semibold flex justify-center pt-25"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          My Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 py-20 max-w-fit ">
          {projects.map((item, index) => (
            <motion.div
              className="bg-zinc-900 rounded-xl "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
              }}
              key={index}
            >
              <Image
                className="rounded-t-2xl 
                object-cover 
               w-full h-auto
                "
                src={item.image || ""}
                alt="project"
                height={400}
                width={420}
              />

              <h1 className="text-2xl font-semibold px-3 pt-5">{item.title}</h1>
              <h2 className="pt-3 px-3 font-semibold">{item.Desc}</h2>
              <ul className="flex flex-wrap px-3 gap-3 my-3">
                {item.tags.map((tag, idx) => (
                  <li
                    key={idx}
                    className="text-blue-600 bg-gray-800 text-center font-semibold px-2 rounded-3xl "
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="flex items-center mx-5">
                <Link href={item.link}>
                  <button className=" h-auto w-auto rounded-full flex gap-1 items-center border-2 border-blue-500 px-2 py-1 transition-transform duration-1000 hover:scale-110">
                    <Image
                      className="bg-white rounded-full"
                      src={"/view.png"}
                      alt="Preview"
                      height={30}
                      width={30}
                    />
                    <h1>Preview</h1>
                  </button>
                </Link>
                <Link href={item.github}>
                  <button className=" p-1 rounded-full">
                    <Image
                      src={"/github.png"}
                      alt="Preview"
                      height={50}
                      width={50}
                    />
                  </button>
                </Link>
                <button
                  onClick={() => setselected(item)}
                  className="bg-white  h-auto w-auto rounded-full"
                >
                  <Image
                    src={"/info.png"}
                    alt="Preview"
                    height={30}
                    width={30}
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        {selected && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 bg-white/30 backdrop-blur-none flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-zinc-900 text-white rounded-xl p-5 w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] flex flex-col md:flex-row gap-6 relative overflow-auto max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 100 }}
              transition={{ duration: 0.4 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setselected(null)}
                className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-full text-sm"
              >
                Close
              </button>

              {/* Video */}
              <div className="w-full md:w-1/2">
                <iframe
                  src={selected.videolink}
                  height="300"
                  width="100%"
                  className="rounded-lg"
                  allow="autoplay fullscreen"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Details */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
                <p className="mb-4">{selected.Desc}</p>
                <h3 className="font-semibold mb-2">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {selected.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Projects;
