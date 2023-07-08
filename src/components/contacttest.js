// import React from "react";

// //formspree
// import { useForm, ValidationError } from "@formspree/react";
// //motion
// import { motion } from "framer-motion";

// //variants
// import { fadeIn } from "../variants";

// function ContactForm() {
//   const [state, handleSubmit] = useForm("mpzgzplr");
//   if (state.succeeded) {
//     return <p>Thanks for joining!</p>;
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="email">Email Address</label>
//       <input id="email" type="email" name="email" />
//       <ValidationError prefix="Email" field="email" errors={state.errors} />
//       <textarea id="message" name="message" />
//       <ValidationError prefix="Message" field="message" errors={state.errors} />
//       <button type="submit" disabled={state.submitting}>
//         Submit
//       </button>
//     </form>
//   );
// }

// const Contact = () => {
//   return (
//     <section className="section" id="contact">
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row">
//           {/* text */}
//           <div className="flex-1 flex justify-start items-center">
//             <div>
//               <h4 className="text-xl uppercase font-medium mb-2 tracking-wide">
//                 Get in touch
//               </h4>
//               <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
//                 Let`s work <br />
//                 together
//               </h2>
//             </div>
//           </div>
//           {/* form */}
//           <form className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
//             <input
//               className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-[#17b9b6] transition-all"
//               type="text"
//               placeholder="Your name"
//             />
//             <input
//               className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-[#17b9b6] transition-all"
//               type="text"
//               placeholder="Your email"
//             />
//             <textarea
//               className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-[#17b9b6] transition-all resize-none mb-12"
//               placeholder="Your message"
//             ></textarea>
//             <button className="btn btn-lg">Send message</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
