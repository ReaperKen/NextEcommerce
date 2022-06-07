import Link from "next/link";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [bg, setBg] = useState(false);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 50) {
        setBg(true);
      } else {
        setBg(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      className={
        bg
          ? "fixed w-full mx-auto h-16 flex items-center justify-between bg-white/5 backdrop-filter backdrop-blur-[3px] text-white z-[999]"
          : "fixed w-full mx-auto h-16 flex items-center justify-between text-white z-[999] "
      }
    >
      <div className="pl-6">
        <span>Logo</span>
      </div>
      <div className="pr-6">
        <ul className="hidden sm:flex items-center justify-between space-x-4">
          <Link href="/">
            <li className="hover:border-b border-dark-300 cursor-pointer">
              Home
            </li>
          </Link>
          <Link href="/Categories">
            <li className="hover:border-b border-dark-300 cursor-pointer">
              Categories
            </li>
          </Link>
        </ul>
      </div>
      <div className="sm:hidden" onClick={() => setNav(!nav)}>
        <GiHamburgerMenu size={30} className="mr-6" />
      </div>
      <div
        className={
          nav
            ? "sm:hidden w-full h-screen fixed right-0 top-0 bg-black/70 z-[999]"
            : "absolute"
        }
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white/5 backdrop-filter backdrop-blur-[3px] p-10 ease-in duration-500"
              : "fixed right-[-100%] h-screen top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex flex-col items-center justify-between h-full w-full">
            <div className="flex items-center justify-between w-full">
              <span>Logo</span>
              <div
                className="rounded-full shadow-lg shadow-dark-300 p-3 cursor-pointer"
                onClick={() => setNav(!nav)}
              >
                <AiOutlineClose />
              </div>
            </div>
            <ul className="space-y-8 text-center">
              <Link href="/">
                <li className="hover:border-b border-dark-300 cursor-pointer">
                  Home
                </li>
              </Link>
              <Link href="/Categories">
                <li className="hover:border-b border-dark-300 cursor-pointer">
                  Categories
                </li>
              </Link>
            </ul>
            <div>
              <span>&copy; By Ken</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
