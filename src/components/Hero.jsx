import { FaCirclePlay } from "react-icons/fa6"

import heroImg from '../assets/hero-image.png';
import companies from '../assets/companies.svg'

import Button from '../components/Button'
const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-wrap lg:flex-nowrap w-full h-full px-[100px] bg-[#202122] pt-32 gap-8">
      <div className='mb-4'>
        <div className='flex flex-col items-start justify-center gap-8'>
          <h1 className='px-4 text-white text-4xl sm:text-5xl font-serif font-extrabold w-96 leading-[48px]'>
            Gain in-demand skills for <span className='text-[#52a350]'>free</span>
          </h1>
          <p className='px-4 font-thin text-white text-[14px] max-w-[500px]'>
            Join the Side Hustle Internship to learn and get the hands-on
            experience needed. Our interns are ready to take on entry-level and
            junior positions in just 8 weeks.
          </p>
          <Button text='Signup for FREEE'/>
        </div>
        <img src={ companies } alt="" className="mx-4"/>
      </div>
      <div className="flex flex-col items-center justify-center mb-8 gap-4">
        <img src={ heroImg } alt="hero image"/>
        <div className="flex gap-4 justify-center items-center text-white">
          <a href="#"><FaCirclePlay /></a>
          <a href="#"><p>Play to see Previous Experiences</p></a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
