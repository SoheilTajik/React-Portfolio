import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <section
      className="py-8 lg:py-40 flex items-center bg-[#313454]"
      id="footer"
    >
      <div className="container mx-auto">
        {/* nav inner*/}
        <div className="w-full h-[30px] mx-auto flex justify-center gap-x-4 text-lg text-white items-center">
          <p>Copyright &#169; 2023 Soheil Tajik. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
