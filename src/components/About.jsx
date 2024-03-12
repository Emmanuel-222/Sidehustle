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
    <div className="grid grid-cols-1 lg:grid-cols-2 
    place-content-center gap-4">
      <div className="grid grid-cols-1 md:col-start-3 md:col-end-6 text-[#2f2f2f] p-12 m-4">
      <h2 className="text-xl font-bold style={margin-bottom: 0}">Your Heading</h2>
        <p className="text-center text-[14px] font-thin font-mono">
          Since 2020, Side Hustle has trained over 350 thousand African youths
          in various fields across Engineering, Marketing, Product and Design.
        </p>
      </div>

      <div className="grid md:grid-cols-2 md:col-start-7 md:col-end-13 place-content-center m-4 gap-4">
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
