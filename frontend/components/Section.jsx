import Image from "next/image";
import bg from "../public/assets/sectionbg.jpeg";
const Section = () => {
  return (
    <div className="h-[100vh] w-full grid grid-cols-1 md:grid-cols-2">
      <div className="h-full bg-black text-white flex flex-col text-center items-center justify-center w-full">
        <h2 className="text-2xl md:text-4xl">New Products Every Day!</h2>
        <p className="text-xl md:text-3xl text-gray-400">Only for you!</p>
      </div>
      <div className="relative w-full">
        <Image src={bg} layout="fill" alt="" className="z-[1]" />
      </div>
    </div>
  );
};

export default Section;
