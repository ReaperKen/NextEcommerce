import Card from "./Card";
import Link from "next/link";

const Grid = ({ data, title }) => {
  return (
    <div className="w-full min-h-[70vh] h-auto flex items-center justify-center flex-col text-white text-center p-4">
      <h2 className="my-8 text-2xl font-bold md:text-4xl">{title}</h2>
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 gap-y-10 md:gap-x-6 place-items-center">
        {data?.map((item) => (
          <Link href={`/${item._id}`} key={item._id}>
            <a>
              <Card data={item} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Grid;
