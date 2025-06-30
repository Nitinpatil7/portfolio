"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const skillCards = [
  {
    title: "Front-End",
    bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
    skills: [
      {
        name: "HTML",
        icon: "/html-5.png",
        size: 24,
        message: "Structure of every web page I build.",
      },
      {
        name: "CSS",
        icon: "/css-3.png",
        size: 24,
        message: "Used to design and style every pixel beautifully.",
      },
      {
        name: "React",
        icon: "/atom.png",
        size: 24,
        message: "I build dynamic UIs and components using React.",
      },
      {
        name: "Next.js",
        icon: "/Next.png",
        size: 40,
        message: "Powerful React framework I use for full-stack apps.",
      },
      {
        name: "TailwindCSS",
        icon: "/tailwind.png",
        size: 30,
        message: "I used for clean designs , Fully Responsive and Animations.",
      },
    ],
  },
  {
    title: "Back-End",
    bgColor: "bg-gradient-to-br from-gray-900 to-gray-800",
    skills: [
      {
        name: "Node.js",
        icon: "/nodejs.png",
        size: 24,
        message: "JavaScript runtime I use to run server-side logic.",
      },
      {
        name: "ExpressJs",
        icon: "/express.png",
        size: 24,
        extraClass: "bg-white p-1 rounded",
        message: "fast web framework for building APIs.",
      },
      {
        name: "MongoDB",
        icon: "/mongodb.png",
        size: 24,
        message: "NoSQL database I use to store flexible data.",
      },
      {
        name: "Firebase",
        icon: "/firebase.png",
        size: 30,
        message: "Used for real-time database, auth, and cloud functions.",
      },
    ],
  },
  {
    title: "App Development",
    bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
    skills: [
      {
        name: "Flutter",
        icon: "/flutter.png",
        size: 24,
        message:
          "Builds beautiful mobile apps for Android & iOS with a single codebase.",
      },
    ],
  },
  {
    title: "Tech Languages",
    bgColor: "bg-gradient-to-br from-gray-900 to-gray-800",
    skills: [
      {
        name: "Java",
        icon: "/java.png",
        size: 24,
        message:
          "I use Java for object-oriented concepts and DSA.",
      },
    ],
  },
  {
    title: "Familiar With",
    bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
    skills: [
      {
        name: "C",
        icon: "/letter-c.png",
        size: 24,
        message:
          "Foundation of programming — I use it to understand memory and logic.",
      },
      {
        name: "C++",
        icon: "/c-.png",
        size: 24,
        message: "I use C++ for OOPs and logic-building in early development.",
      },
      {
        name: "Python",
        icon: "/python.png",
        size: 24,
        message: "Great for scripting, automation, and backend logic.",
      },
      {
        name: "Dart",
        icon: "/dart.png",
        size: 30,
        message: "Dart powers my Flutter apps with strong typed logic.",
      },
    ],
  },
  {
    title: "Tools",
    bgColor: "bg-gradient-to-br from-gray-900 to-gray-800",
    skills: [
      {
        name: "VS-Code",
        icon: "/vscode.png",
        size: 24,
        message: "My go-to code editor for all projects.",
      },
      {
        name: "Postman",
        icon: "/icons8-postman-inc-48.png",
        size: 24,
        message: "I use Postman to test and debug APIs efficiently.",
      },
      {
        name: "Github",
        icon: "/github.png",
        size: 40,
        message:
          "Version control and collaboration platform I use for every project.",
      },
    ],
  },
];

const Skills = () => {
  return (
    <div id="Skills" className="max-h-fit w-full text-white bg-neutral-900 px-5 py-10">

       <motion.h1
            className="text-5xl font-bold text-center py-10"
            initial={{opacity:0, y:30}}
            whileInView={{opacity: 1 , y: 0}}
            transition={{duration:0.8 , delay:0.3}}
            >
              My Skills
            </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-5">
        {skillCards.map((card, index) => (
          <motion.div
            key={index}
            className={`rounded-2xl shadow-lg p-6 ${card.bgColor}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3

             }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
            }}
          >
            <h2 className="text-2xl font-extrabold text-blue-400 mb-4">
              {card.title}
            </h2>
            <ul className="flex flex-col gap-3">
              {card.skills.map((skill, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-lg"
                  data-tooltip-id={`tooltip-${card.title}-${skill.name}`}
                  data-tooltip-content={skill.message}
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={skill.size}
                    height={skill.size}
                    className={`${skill.extraClass || ""}`}
                  />
                  {skill.name}

                  {/* Tooltip per skill */}
                  <Tooltip id={`tooltip-${card.title}-${skill.name}`} />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
