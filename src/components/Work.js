import React from "react";

//motion
import { motion } from "framer-motion";

//variants
import { faceIn } from "../variants";

//image
import Img1 from "../assets/project1.jpg";
import Img2 from "../assets/project2.jpg";
import Img3 from "../assets/project3.jpg";
import Img4 from "../assets/project4.jpg";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 mt-24">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/*text*/}
            <div>
              <h2 className="text-2xl font-primary uppercase mb-6">
                My latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-10">
                I am passionate about using technology to make a positive
                impact. By combining my design skills with my knowledge of web3
                and blockchain, I can create transformative solutions that
                address global challenges and shape the future.
              </p>
              <button
                className="btn btn-sm"
                onClick={() =>
                  window.open("https://github.com/SoheilTajik", "_blank")
                }
              >
                View all projects
              </button>
            </div>
            {/*image*/}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/*overlay*/}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/*images*/}
              <img
                src={Img1}
                alt=""
                className="group-hover:scale-125 transition-all duration-500"
              />
              {/*pretitle*/}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Web3</span>
              </div>
              {/*title*/}
              <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                <span className="text-lg text-white">Wallet Balance</span>
                <div className="flex gap-5">
                  <a
                    href="https://next-ethereum-ct0dhmdn1-soheiltajik.vercel.app/"
                    target="_blank"
                  >
                    <button className="text-white underline">Demo</button>
                  </a>

                  <a
                    href="https://github.com/SoheilTajik/Next-Ethereum"
                    target="_blank"
                  >
                    <button className="text-white underline">Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col lg:justify-between gap-y-10">
            {/**image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/*overlay*/}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/*images*/}
              <img
                src={Img4}
                alt=""
                className="group-hover:scale-125 transition-all duration-500"
              />
              {/*pretitle*/}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Ethereum Dapp</span>
              </div>
              {/*title*/}
              <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                <span className="text-lg text-white">
                  Vite(React), TailwindCSS, Ethers.js, Web3 Provider
                </span>
                <div className="flex gap-5">
                  <a
                    href="https://eth-trasnsaction-dapp.vercel.app/"
                    target="_blank"
                  >
                    <button className="text-white underline">Demo</button>
                  </a>

                  <a
                    href="https://github.com/SoheilTajik/Eth-Trasnsaction-Dapp/tree/main"
                    target="_blank"
                  >
                    <button className="text-white underline">Code</button>
                  </a>
                </div>
              </div>
              <div></div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/*overlay*/}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/*images*/}
              <img
                src={Img3}
                alt=""
                className="group-hover:scale-125 transition-all duration-500"
              />
              {/*pretitle*/}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Web Design</span>
              </div>
              {/*title*/}
              <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                <span className="text-lg text-white">
                  React & TailwindCss Portfolio
                </span>
                <div className="flex gap-5">
                  <a
                    href="https://react-portfolio-steel-mu.vercel.app/"
                    target="_blank"
                  >
                    <button className="text-white underline">Demo</button>
                  </a>

                  <a
                    href="https://github.com/SoheilTajik/React-Portfolio"
                    target="_blank"
                  >
                    <button className="text-white underline">Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
