import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col w-full text-white items-center justify-center">
      <div className="flex h-24 w-4/5 md:w-3/5 lg:w-2/5 mx-auto text-white justify-between items-center">
        <a
          href="https://www.instagram.com/ken_ukiyo/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <FaInstagram />
          </div>
        </a>
        <a href="https://github.com/ReaperKen" target="_blank" rel="noreferrer">
          <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <FaGithub />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/ken-agudelo-32a2101b1/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
            <FaLinkedinIn />
          </div>
        </a>
      </div>
      <span className="text-xl pb-4">&copy; By Ken</span>
    </div>
  );
};

export default Footer;
