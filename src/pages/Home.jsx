import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <main>
        <h2 className="text-center text-3xl my-4">Welcome To My Store</h2>
        <section>
          <h3 className="text-center text-xl my-4">Products</h3>
          <Products />
        </section>
      </main>
    </>
  );
};

export default Home;
