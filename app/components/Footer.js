import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="max-h-fit w-full text-white bg-neutral-900 py-10 px-10">
        <div className="flex flex-col lg:flex-row lg:justify-around ">
          <div className="py-5">
            <h1 className="text-5xl font-semibold lg:py-3">Nitin Patil</h1>
            <h2 className="font-semibold text-xl">Building Modern Full Website</h2>
          </div>

          <div className="py-5">
            <h1 className="text-2xl font-semibold pb-2 lg:text-3xl">Quick Link</h1>
            <ul className="font-semibold flex flex-col gap-2 lg:text-center">
              <li className="hover:text-blue-500 hover:underline">Home</li>
              <li className="hover:text-blue-500 hover:underline">Skills</li>
              <li className="hover:text-blue-500 hover:underline">Projects</li>
              <li className="hover:text-blue-500 hover:underline">About</li>
              <li className="hover:text-blue-500 hover:underline">Contact</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h1 className="text-2xl py-2  font-semibold lg:text-center">Connect</h1>
            <div className="flex gap-5 lg:items-center ">
             <Link href={"https://www.linkedin.com/in/nitin-patil-9a9866281/"}>
              <button>
                <Image
                  src={"/linkedin.png"}
                  alt="Linkedin"
                  height={30}
                  width={30}
                />
              </button>
             </Link>

             <Link href={"https://github.com/Nitinpatil7"}>

              <button>
                <Image
                  src={"/github.png"}
                  alt="github"
                  height={50}
                  width={50}
                  />
              </button>
                  </Link>

              <Link href={"https://www.instagram.com/nitin.patil_7/?hl=en"}>
              
              <button>
                <Image
                  src={"/instagram.png"}
                  alt="instagram"
                  height={30}
                  width={30}
                  />
              </button>
                  </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-[2px] bg-neutral-800 my-5  "></div>
        <h1 className="flex justify-center font-semibold">©2025 Nitin Patil. All Rights Reserved.</h1>
        
      </div>
    </>
  );
};

export default Footer;
