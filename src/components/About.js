import React from "react";

//image
import Image from "../assets/about.png";

//countup
import CountUp from "react-countup";

//intersection observer-hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/*img*/}
          <div className="flex-1 flex items-center justify-center bg-contain bg-no-repeat">
            <a href="https://www.instagram.com/paradigm_nl/" target="_blank">
              <img
                className="h-[350px] rounded-3xl mix-blend-lighten bg-top"
                src={Image}
                alt=""
              />
            </a>
          </div>
          {/*text*/}
          <div className="flex-1">
            <h2 className="text-2xl font-primary uppercase mb-6 ">About me</h2>
            <p className="mb-6 ">
              my expertise in web3 and Ethereum environments allows me to go
              beyond traditional design boundaries. I can seamlessly integrate
              blockchain functionality, decentralized protocols, and smart
              contracts into my designs, enabling the development of secure,
              efficient, and decentralized applications.
            </p>
            {/*State*/}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={9} duration={3} />
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  DESIGN
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={2} duration={3} />
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  PROJECT DEVELOPMENT
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={1} duration={3} />
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Web3 DEVELOPMENT
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
