import Grid from "../components/Grid";
import Layout from "../components/Layout";
import Main from "../components/Main";
import Section from "../components/Section";

export default function Home({ computers }) {
  return (
    <Layout title="Home">
      <Main />
      <Section />
      <Grid title="Now On Sale" data={computers} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const computers = await fetch(
    process.env.BACKURL + "products/category?category=Computers"
  ).then((res) => res.json());
  return {
    props: {
      computers,
    },
  };
}
