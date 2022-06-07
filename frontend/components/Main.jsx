import Image from "next/image";
import main from "../public/assets/mainbg.jpeg";

const Main = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="bg-black/60 w-full h-screen absolute right-0 top-0 z-10" />
      <Image
        src={main}
        layout="fill"
        alt=""
        objectFit="cover"
        className="z-[1]"
      />
      <div className="flex items-center justify-center flex-col text-white w-full h-screen relative z-30 space-y-2">
        <h1 className="text-3xl md:text-5xl">Ecommerce MERN</h1>
        <p className="max-w-xs mx-auto text-center text-base md:text-xl text-gray-400">
          Here you can find everything you are looking for!
        </p>
      </div>
    </div>
  );
};

export default Main;
