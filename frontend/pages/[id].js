import Image from "next/image";
import Layout from "../components/Layout";

const Product = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <section className="w-full min-h-screen h-auto flex items-center">
        <div className="w-full h-full grid md:grid-cols-2 p-4 ">
          <div className="relative w-full mx-auto md:w-4/5 h-96 mt-16 border-2 border-black rounded-2xl">
            <Image
              src={data.image}
              layout="fill"
              alt=""
              className="rounded-2xl"
              objectFit="cover"
            />
          </div>
          <div className="w-full h-full text-white space-y-4 my-4 md:my-0  flex justify-end flex-col ">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wider">
              {data.name}
            </h1>
            <p className="text-xl md:text-2xl font-bold">${data.price}</p>
            <p className="text-base md:text-lg font-light text-dark-400">
              {data.description}
            </p>
            <button className="w-full flex items-center justify-center text-white border-2 border-dark-300 py-2 rounded-lg hover:opacity-80 ease-in duration-700">
              Add To Cart
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;

export async function getStaticPaths() {
  const data = await fetch("http://localhost:5000/products").then((res) =>
    res.json()
  );
  const paths = data.map(({ _id }) => ({ params: { id: `${_id}` } }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const data = await fetch(
    `http://localhost:5000/products/find/${params.id}`
  ).then((res) => res.json());

  return {
    props: {
      data,
    },
  };
}
