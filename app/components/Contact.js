"use client";
import { motion } from "framer-motion";
import React, { useState , useEffect } from "react";
import Image from "next/image";

const Contact = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      name: form.name.value,
      number: form.number.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("https://formsubmit.co/ajax/np6866181@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success === "true") {
        setStatus("✅ Message sent successfully!");
        form.reset();
      } else {
        setStatus("❌ Failed to send. Try again.");
      }
    } catch (err) {
      setStatus("❌ Something went wrong.");
    }
  };

  return (
    <>
      <div id="Contact" className="max-h-fit w-full text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl font-semibold flex justify-center pt-15 pb-3"
        >
          Get In Touch
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex text-lg justify-center text-center font-semibold mx-2 text-gray-600"
        >
          Have a project in mind or want to explore a potential collaboration?
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex text-lg justify-center text-center mx-2 font-semibold text-gray-600"
        >
          Feel free to get in touch through the form below or via any of the
          provided contact methods — I’m always open to meaningful connections.
        </motion.h3>

        <div className="flex flex-col justify-center items-start gap-10 py-14 lg:justify-center lg:items-center xl:flex-row xl:gap-5">
          {/* Left Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-5 w-[90%] mx-5 lg:flex-row xl:flex-col xl:justify-start"
          >
            {/* Location Card */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="flex gap-5 bg-neutral-900 px-10 py-8 rounded-2xl items-center">
              <Image className="bg-blue-500 rounded-2xl h-12 w-12 p-1" src={"/location.png"} alt="location" height={20} width={20} />
              <div>
                <h1 className="text-2xl font-semibold text-white">Location:</h1>
                <h2 className="text-lg text-neutral-400 font-semibold">Pandesara, Surat</h2>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="flex gap-5 bg-neutral-900 px-10 py-8 rounded-2xl items-center">
              <Image className="bg-blue-500 rounded-2xl h-12 w-12 p-1" src={"/icons8-gmail-40.png"} alt="email" height={20} width={20} />
              <div>
                <h1 className="text-2xl font-semibold text-white">Email:</h1>
                <h2 className="text-lg text-neutral-400 font-semibold">np6866181@gmail.com</h2>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="flex gap-5 bg-neutral-900 px-10 lg:px-7 py-8 rounded-2xl items-center">
              <Image className="bg-blue-500 rounded-2xl h-12 w-12 p-1" src={"/location.png"} alt="location" height={20} width={20} />
              <div>
                <h1 className="text-2xl font-semibold text-white">Phone:</h1>
                <h2 className="text-lg text-neutral-400 font-semibold">+91 8238959529</h2>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-[90%] mx-6 px-5 py-10 bg-neutral-900 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input type="text" name="name" required className="w-full p-3 rounded bg-[#111] text-white outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div>
                <label className="block text-white font-semibold mb-1">
                  Number <span className="text-red-500">*</span>
                </label>
                <input type="number" name="number" required className="w-full p-3 rounded bg-[#111] text-white outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div>
                <label className="block text-white font-semibold mb-1">Subject</label>
                <input type="text" name="subject" className="w-full p-3 rounded bg-[#111] text-white outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div>
                <label className="block text-white font-semibold mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea name="message" required className="w-full p-3 rounded bg-[#111] text-white h-32 outline-none resize-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                  </svg>
                  Send Message
                </button>
              </div>

              {status && <p className="text-green-400 font-semibold text-center">{status}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
