import { AiFillSafetyCertificate, AiTwotoneExperiment } from "react-icons/ai";
import { VscBook } from "react-icons/vsc";
import { SiFastify } from "react-icons/si";

const About = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen text-center bg-white gap-28 px-16">
      <div className="border-2 w-[30%] mt-8 max-h-[300px]">
        <h1>What you stand to gain</h1>
        <p>
          Since 2020, Side Hustle has trained over 350 thousand African youths
          in various fields across Engineering, Marketing, Product and Design.
        </p>
        <button>Signup for FREEE</button>
      </div>

      <div className="w-[70%] border-2">
        <div>
          <AiFillSafetyCertificate />
          <h5>Earn a certificate</h5>
          <p>
            All Side Hustle Internship finalists will be awarded a paid
            certificate of completion at the end of the Internship.
          </p>
        </div>
        <div>
          <AiTwotoneExperiment />
          <h5>Get hands-on experience</h5>
          <p>
            During the Side Hustle Internship, you will be assigned projects and
            team assignments that will give you the needed experience, and help
            you build your portfolio, teamwork, and communication skills.
          </p>
        </div>
        <div>
          <VscBook />
          <h5>Learn from the very best</h5>
          <p>
            Learning is a wonderful experience, and learning from the best makes
            everything ten times easier. The Side Hustle Internship mentors and
            lead instructors are all here to make your Internship experience
            unforgettable.
          </p>
        </div>
        <div>
          <SiFastify />
          <h5></h5>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default About;
