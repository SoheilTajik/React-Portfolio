import React from "react";

//icon
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { fadeIn } from "../variants";

//image
// import Service from "../assets/services.png";

//Services data
const services = [
  {
    name: "Web3 Development",
    description:
      "I excel at developing decentralized applications (dApps) that integrate blockchain functionality, decentralized protocols, and smart contracts. Using React.js and web3 tools, I can create secure, efficient, and decentralized solutions tailored to your specific needs.",
    link: "Learn more",
  },

  {
    name: "Web Design",
    description:
      "With a keen eye for aesthetics and a deep understanding of design principles, I can create visually appealing and intuitive user interfaces. By incorporating the latest design trends and techniques, I ensure that the solutions I design are not only visually appealing but also user-friendly and accessible.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section
      className="section 
    "
      id="services"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row">
          {/*text & image*/}
          <div className="flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="text-2xl font-primary uppercase mb-6">What I Do</h2>
            <h3 className="font-secondary leading-tight max-w-[455px] mb-16">
              I offer a comprehensive range of services focused on web3
              development and design. With expertise in React.js, Tailwind CSS,
              and web3 tools, I specialize in creating innovative solutions that
              leverage the power of blockchain technology.
            </h3>
            <a href="https://github.com/SoheilTajik" target="_blank">
              <button className="btn btn-sm">See my work</button>
            </a>
          </div>
          {/*services*/}
          <div className="flex-1">
            {/*services Items*/}
            <div>
              {services.map((service, index) => {
                // destructor service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[200px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight mb-10">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
