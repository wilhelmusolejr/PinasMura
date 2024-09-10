import Navigator from "../components/Navigator";

import product from "../assets/sweater1.png";
import Footer from "../components/Footer";

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
            <h2 className="text-4xl font-bold md:pb-5 md:text-6xl">Sweater</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
              dolores ab quam, dignissimos molestias quis quasi porro hic
              voluptas iusto!
            </p>

            <div className="my-5 flex flex-col gap-3">
              <div className="flex gap-1">
                <p>Selected color:</p>
                <p>Light Quartz Gray</p>
              </div>
              <div className="flex gap-2">
                <div className="h-7 w-7 rounded-full bg-orange-500"></div>
                <div className="h-7 w-7 rounded-full bg-red-500"></div>
                <div className="h-7 w-7 rounded-full bg-blue-500"></div>
              </div>
            </div>

            <a href="/cart">
              <button className="my-10 w-full rounded-3xl bg-orange-500 py-5 text-white">
                Add to cart
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
