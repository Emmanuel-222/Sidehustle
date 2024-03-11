import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleClick = () => setNav(!nav)
  return (
    <nav className="w-full p-4 fixed bg-[#191b1c] flex justify-between items-center gap-8 shadow-lg text-white text-center sm:px-40">
      <h1 className="text-3xl font-serif cursor-pointer">logo</h1>
      <div className="hidden lg:flex justify-between items-center w-[700px] cursor-pointer">
        <div className="px-6 flex justify-around items-center gap-8 text-xs">
          <h5>Bootcamp</h5>
          <h5>Blog</h5>
        </div>
        <h4>Login</h4>
      </div>
      <div onClick={handleClick} className="lg:hidden z-10 flex justify-center items-center text-2xl">
         {
          nav ? <FaBars/> : <IoMdClose /> 
         }
      </div>

      {/* Mobile view */}
      <ul className={nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen cursor-pointer flex flex-col justify-center items-center bg-[#191b1c]'}>
        <li className="py-4 text-4xl hover:border-b-2">Bootcamp</li>
        <li className="py-4 text-4xl transition hover:border-b-2">Blog</li>
        <button className="py-4 text-4xl hover:bg-black px-6 rounded-[20px]">Login</button>
      </ul>
    </nav>
  );
};

export default Navbar;
