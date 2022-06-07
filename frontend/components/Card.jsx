import Image from "next/image";

const Card = ({ data }) => {
  return (
    <div className="w-40 md:w-48 h-48 md:h-56 text-center flex flex-col items-center justify-between shadow-xl shadow-black p-6 rounded-xl cursor-pointer hover:scale-105 ease-in duration-500">
      <Image
        src={data.image}
        width={150}
        height={120}
        alt="product"
        className="rounded-lg mt-2"
      />
      <h2 className="text-light text-xs md:text-sm">{data.name}</h2>
      <p>${data.price}</p>
    </div>
  );
};

export default Card;
