// asset
import product from "../assets/clothe8.png";

import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import Button from "../components/Button";
import ProductColorIndicator from "../components/ProductColorIndicator";
import Heading from "../components/Heading";
import ProductList from "../components/ProductList";
import Product from "../components/Product";

export default function ProductPage() {
  return (
    <>
      <Navigator />

      <section className="container mx-auto mt-40 p-5">
        <div className="flex flex-col justify-center gap-3 md:flex-row md:gap-5">
          <div className="product-image w-full rounded-xl bg-gray-100 p-10 md:w-5/12">
            <img src={product} alt="" />
          </div>
          <div className="product my-5 md:w-5/12">
            <Heading className="md:pb-5">Sweater</Heading>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
              dolores ab quam, dignissimos molestias quis quasi porro hic
              voluptas iusto!
            </p>

            <div className="my-5 flex flex-col gap-2">
              <div className="flex gap-1">
                <p>Selected color:</p>
                <p>Light Quartz Gray</p>
              </div>
              <div className="flex gap-2">
                <ProductColorIndicator className="bg-orange-500" size="7" />
                <ProductColorIndicator className="bg-red-500" size="7" />
                <ProductColorIndicator className="bg-blue-500" size="7" />
              </div>
            </div>

            <Button className="my-5">Add to cart</Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto mt-32 p-5 md:mt-40">
        <h2 className="text-2xl font-bold md:text-4xl">Related products</h2>
      </div>

      <section className="container mx-auto my-10 px-5">
        <ProductList>
          <Product />
          <Product />
          <Product />
          <Product />
        </ProductList>
      </section>

      <Footer />
    </>
  );
}
