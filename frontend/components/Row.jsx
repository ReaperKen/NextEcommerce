import { useRef, useState } from "react";
import Link from "next/link";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";

const Row = ({ data, title }) => {
  const rowRef = useRef();
  const [isMove, setIsMove] = useState(false);
  const handleClick = (dir) => {
    setIsMove(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        dir === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  return (
    <>
      <h2 className="my-8 text-2xl md:text-4xl font-bold text-dark-400">
        {title}
      </h2>
      <div className="group h-64 w-[98vw] relative mb-2 flex  items-center justify-center">
        <div className="rounded-full shadow-lg bg-black/30 shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300 hidden md:block absolute left-2 text-4xl text-white opacity-0  transition-all  group-hover:opacity-100 group-hover:bg-bop z-10">
          <AiOutlineLeft className="" onClick={() => handleClick("left")} />
        </div>

        <div
          ref={rowRef}
          className="h-full w-full flex overflow-x-scroll overflow-y-hidden space-x-4 scrollbar-hide"
        >
          {data?.map((item) => (
            <Link href={`/${item._id}`}>
              <a>
                <Card data={item} key={item._id} />
              </a>
            </Link>
          ))}
        </div>
        <div className="rounded-full shadow-lg bg-black/30 shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300 hidden md:block absolute right-2 text-4xl text-white opacity-0  transition-all  group-hover:opacity-100 group-hover:bg-bop z-10">
          <AiOutlineRight onClick={() => handleClick("right")} />
        </div>
      </div>
    </>
  );
};

export default Row;
