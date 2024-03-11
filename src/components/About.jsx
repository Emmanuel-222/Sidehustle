import { AiFillSafetyCertificate, AiTwotoneExperiment } from "react-icons/ai";
import { VscBook } from "react-icons/vsc";
import { SiFastify } from "react-icons/si";

import Card from "./Card";

const CardData = [
  {
    icon: <AiFillSafetyCertificate className="mb-4 text-2xl"/>,
    h4Text: "Earn a certificate",
    pText: "All Side Hustle Internship finalists will be awarded a paid certificate of completion at the end of the Internship."
  },

  {
    icon: <AiTwotoneExperiment className="mb-4 text-2xl"/>,
    h4Text: "Get hands-on experience",
    pText: "During the Side Hustle Internship, you will be assigned projects and team assignments that will give you the needed experience, and help you build your portfolio, teamwork, and communication skills."
  },

  {
    icon: <VscBook className="mb-4 text-2xl"/>,
    h4Text: "Learn from the very best",
    pText: "Learning is a wonderful experience, and learning from the best makes everything ten times easier. The Side Hustle Internship mentors and lead instructors are all here to make your Internship experience unforgettable."
  },

  {
    icon: <SiFastify className="mb-4 text-2xl"/>,
    h4Text: "Be a part of a fast-growing startup",
    pText: "During the bootcamp, all Side Hustle Internship finalists will have the opportunity to build a fast-paced start-up."
  }
]
const About = () => {
  return (
    <div className="flex items-start pt-20 lg:pt-32 justify-start flex-wrap lg:flex-nowrap w-full h-screen text-center bg-white gap-28 px-16">
      <div className="w-full max-h-[300px] p-8 text-[#2f2f2f]">
        <h1 className="text-2xl font-extrabold">
          What you stand to <span className="text-[#52a350]">gain</span>
        </h1>
        <p className="text-center text-[14px] font-thin">
          Since 2020, Side Hustle has trained over 350 thousand African youths
          in various fields across Engineering, Marketing, Product and Design.
        </p>
      </div>

      <div className="w-full grid md:grid-cols-2 place-content-center gap-12 pb-8">
        {
          CardData.map((item, index) => {
            return <Card key={index} data={item}/>
          })
        }
      </div>
    </div>
  );
};

export default About;
