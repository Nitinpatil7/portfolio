"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const Home = () => {
  return (
    <>
      <div
        id="Home"
        className="max-h-fit  w-full text-white flex flex-col justify-start pt-10 lg:py-20 xl:py-28"
      >
        <div className="pt-10 flex flex-col-reverse gap-10 lg:gap-0  lg:flex-row lg:justify-center lg:items-center ">
          <div className="w-full py-5 px-7 flex flex-col items-center  ">
            <motion.h1
              className="flex text-2xl gap-1 items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hello , I’m{" "}
              <p className="text-3xl font-semibold py-1 lg:text-5xl xl:text-6xl">Nitin Patil👋 </p>
            </motion.h1>

            <motion.h2
              className="font-semibold text-xl py-2 flex justify-center text-center 2xl:text-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              A passionate Full-Stack Developer and App Developer
            </motion.h2>

            <motion.h3
              className="font-semibold text-gray-400 max-w-xl flex justify-center text-center 2xl:text-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              I build powerful, responsive websites and cross-platform mobile
              apps using technologies like React, Next.js, Flutter, Firebase,
              and MongoDB. With a strong foundation in both web and mobile
              development, I focus on creating real-world solutions that are
              fast, clean, and user-friendly.
            </motion.h3>
            <div className="flex gap-5 py-5 justify-center">
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <Link
                  href={"https://www.linkedin.com/in/nitin-patil-9a9866281/"}
                >
                  <Image
                    src={"/linkedin.png"}
                    alt="Linkedin"
                    height={40}
                    width={40}
                  />
                </Link>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <Link href={"https://github.com/Nitinpatil7/"}>
                  <Image
                    src={"/github.png"}
                    alt="github"
                    height={60}
                    width={60}
                  />
                </Link>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <Link
                  href={
                    "https://mail.google.com/mail/?view=cm&fs=1&to=np6866181@gmail.com"
                  }
                >
                  <Image
                    src={"/comments.png"}
                    alt="Gmail"
                    height={40}
                    width={40}
                  />
                </Link>
              </motion.button>
            </div>
          </div>

          <motion.div
            className="w-full flex justify-center relative"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1.4,
            }}
          >
            <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] top-[-20px] left-[50px] sm:left-[150px] md:left-[160px] lg:h-[300px] lg:w-[300px] lg:left-[70px]
             xl:w-[500px] xl:h-[500px]
            2xl:top-[-20px] 2xl:left-[100px] 
            xl:top-[-20px] xl:left-[40px]
            bg-blue-500 opacity-[0.2] rotate-[2deg] rounded-tl-4xl rounded-br-4xl z-0"></div>
            <div className="absolute top-[20px] right-[50px] sm:right-[150px] md:right-[160px] sm:h-[400px] sm:w-[400px] lg:h-[300px] lg:w-[300px] lg:right-[70px] w-[300px] h-[300px]
            xl:w-[500px] xl:h-[500px]
            2xl:top-[20px] 2xl:right-[100px]
            xl:top-[20px] xl:right-[40px] 
            bg-blue-500 opacity-[0.2] rotate-[2deg] rounded-tl-4xl rounded-br-4xl z-0"></div>

            <Image
              className="relative z-10 rounded-tl-4xl rounded-br-4xl rotate-2
               w-[300px] h-[300px] 
    sm:w-[400px] sm:h-[400px] 
    md:w-[400px] md:h-[400px] 
    lg:w-[300px] lg:h-[300px] 
    xl:w-[500px] xl:h-[500px]
              "
              src="/profile.jpg"
              alt="Nitin Profile Picture"
              height={350}
              width={350}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
