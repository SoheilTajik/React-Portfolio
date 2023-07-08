import React from "react";

import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
//formspree
//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div className="flex-1 flex justify-start items-center">
            <div>
              <h4 className="text-2xl font-primary uppercase mb-6">
                Get in touch
              </h4>
              <h2 className="font-secondary leading-tight mb-10 text-2xl">
                Let`s work <br />
                together
              </h2>
            </div>
          </div>
          {/* form */}
          <div className="flex-1 border rounded-2xl flex flex-col p-6 items-start">
            <div className="flex gap-2 justify-center items-center mb-4">
              <HiOutlineMail className="text-2xl" />
              <h3 className="text-2xl">Soheil.tajik@gmail.com</h3>
            </div>
            <div className="flex items-center justify-center text-2xl gap-x-5">
              <a href="https://github.com/SoheilTajik" target="_blank">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/soheil-tajik/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
