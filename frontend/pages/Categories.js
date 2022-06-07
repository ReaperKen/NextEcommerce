import Layout from "../components/Layout";
import Row from "../components/Row";

const Categories = ({ computers, menClothes }) => {
  return (
    <Layout title="Categories">
      <div className="w-full min-h-screen h-auto flex items-center justify-center">
        <div className="flex flex-col items-center justify-evenly text-white mt-16">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wider">
            All Categories
          </h1>
          <Row title="Computers" data={computers} />
          <Row title="Men's Clothing" data={menClothes} />
        </div>
      </div>
    </Layout>
  );
};

export default Categories;

export async function getServerSideProps() {
  const [computers, menClothes] = await Promise.all([
    fetch(
      process.env.BACKURL + "products/category?category=Computers&limit=18"
    ).then((res) => res.json()),
    fetch(
      process.env.BACKURL + "products/category?category=MenClothes&limit=18"
    ).then((res) => res.json()),
  ]);

  return {
    props: {
      computers,
      menClothes,
    },
  };
}
