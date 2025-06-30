"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const About = () => {
  return (
    <>
      <div id="About" className="w-full max-h-fit text-white bg-neutral-900">
        <motion.h1
          className="text-5xl font-semibold flex justify-center py-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          About Me
        </motion.h1>

        <div className="flex flex-col justify-center gap-15 xl:flex-row">
          <motion.div
            className=" flex justify-center lg:py-5 px-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            <Image
              className=" rounded-2xl
              xl:h-[500px] xl:w-[450px]
               2xl:h-[500px] 2xl:w-[500px]
              "
              src="/profile.jpg"
              alt="Nitin Profile Picture"
              height={350}
              width={350}
            />
          </motion.div>
          <motion.div
            className="px-5 md:px-10 xl:w-[50%]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            <h1 className="text-5xl font-semibold text-blue-400">
              Full Stack Developer
            </h1>
            <h2 className="font-semibold text-gray-400 py-3">
              Hi, I’m Nitin — a passionate and versatile Full Stack Developer
              skilled in MERN stack, Next.js, Flutter, and Firebase, with a
              strong focus on building scalable and modern web and mobile
              applications. I enjoy crafting seamless digital experiences using
              clean, efficient code and user-centric design.
            </h2>
            <h3 className="font-semibold text-gray-400 py-3">
              I’m constantly evolving as a developer—currently diving deeper
              into Java and Data Structures & Algorithms (DSA) to sharpen my
              problem-solving skills and write more optimized solutions. I also
              explore ways to integrate AI into real-world projects, aiming to
              build intelligent and future-ready applications.
            </h3>
            <h4 className="font-semibold text-gray-400 py-3">
              Whether it’s frontend, backend, mobile, or AI-enhanced systems, I
              love contributing to impactful projects, collaborating with
              growth-minded teams, and staying at the edge of technology. I’m
              always open to new opportunities that challenge me to grow and add
              value through innovation.
            </h4>
            <motion.div
              className="pt-5  flex flex-wrap gap-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="flex gap-5">
                <Image
                  className="bg-blue-500 rounded-2xl h-10 w-10"
                  src={"/icons8-person-80.png"}
                  alt="profile"
                  height={40}
                  width={40}
                />
                <div>
                  <h1 className="text-sm text-gray-500 font-semibold">Name:</h1>
                  <h2 className="text-lg font-semibold">Nitin Patil</h2>
                </div>
              </div>
              <div className="flex gap-5">
                <Image
                  className="bg-blue-500 rounded-2xl h-10 w-10 p-1"
                  src={"/calendar.png"}
                  alt="profile"
                  height={20}
                  width={20}
                />
                <div>
                  <h1 className="text-sm text-gray-500 font-semibold">
                    Experience:
                  </h1>
                  <h2 className="text-lg font-semibold">Fresher</h2>
                </div>
              </div>

              <div className="flex gap-5">
                <Image
                  className="bg-blue-500 rounded-2xl h-10 w-10 p-1"
                  src={"/location.png"}
                  alt="profile"
                  height={30}
                  width={30}
                />
                <div>
                  <h1 className="text-sm text-gray-500 font-semibold">
                    Location:
                  </h1>
                  <h2 className="text-lg font-semibold">Pandesara, Surat</h2>
                </div>
              </div>
              <div className="flex gap-5">
                <Image
                  className="bg-blue-500 rounded-2xl h-10 w-10 p-1"
                  src={"/icons8-gmail-40.png"}
                  alt="profile"
                  height={20}
                  width={20}
                />
                <div>
                  <h1 className="text-sm text-gray-500 font-semibold">
                    Email:
                  </h1>
                  <h2 className="text-lg font-semibold">np6866181@gmail.com</h2>
                </div>
              </div>
            </motion.div>
            <motion.button
              className="flex gap-2 bg-blue-500 rounded-xl items-center font-semibold px-2 shadow-2xl my-5 py-1 text-white hover:bg-blue-600 transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume.pdf"; 
                link.download = "Nitin_Patil_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Image
                src={"/download.png"}
                alt="download icon"
                height={30}
                width={30}
              />
              Download Resume
            </motion.button>
          </motion.div>
        </div>

        <div className="py-10 flex flex-col justify-center md:flex-row md:items-center ">
          <motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl flex justify-center  pb-5 text-blue-600 xl:justify-end xl:px-6 "
            >
              Education
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col bg-black px-5 py-5 w-ful rounded-2xl gap-2 max-h-fit mx-5 xl:text-end "
            >
              <h1 className="text-2xl font-semibold">
                Bachelor of Computer Applications
              </h1>
              <h2 className="text-blue-400">C.B.Patel (VNSGU)</h2>
              <h3 className="text-neutral-500 font-semibold">2023-2026</h3>
              <h4 className="text-neutral-500 font-semibold ">
                Focused on core subjects, diving into development and SDE path.
              </h4>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-[2px] mt-11 h-52 bg-blue-800 mx-5 hidden md:block z-10"
          ></motion.div>

          <motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl font-semibold flex  justify-center  pb-5 text-blue-600 xl:justify-start xl:px-6 "
            >
              Certification
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col bg-black px-5 py-5 w-ful rounded-2xl gap-2 max-h-fit mx-5 "
            >
              <h1 className="text-2xl font-semibold">
                Diploma in Flutter Developemnt
              </h1>
              <h2 className="text-blue-400">Hi-Tech Computer Education</h2>
              <h3 className="text-neutral-500 font-semibold">2023</h3>
              <h4 className="text-neutral-500 font-semibold">
                Learned cross-platform app development using Flutter and
                Firebase.
              </h4>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
