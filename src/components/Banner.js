import React from "react";

//images
import Image from "../assets/avatar.png";

//icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[75vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/**text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <h1 className="text-[45px] font-bold leading-[0.8] lg:text-[50px]">
              SOHEIL <span>TAJIK</span>
            </h1>
            <div className="mb-3 text-[36px] lg:text-[35px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-2">I am a</span>
              <TypeAnimation
                sequence={[
                  "Web3 Developer",
                  2000,
                  "Researcher",
                  2000,
                  "Designer",
                  2000,
                ]}
                speed={50}
                className="text-cyan-500"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">
              I am a skilled designer and developer, specializing in web3 and
              Ethereum environments. With a results-driven approach and a
              practical mindset, I excel at designing and developing innovative
              solutions that tackle global challenges leveraging the power of
              web3 technologies.
            </p>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <Link to="contact" activeClass="active" smooth={true} spy={true}>
                <button className="btn btn-lg">Contact me</button>
              </Link>
              {/**socials */}
              <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
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
          {/**image */}
          <div className="hidden lg:flex flex-1 max-w-[380px] lg:max-w-[350px] mx-auto">
            <img className="mix-blend-lighten" src={Image} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
