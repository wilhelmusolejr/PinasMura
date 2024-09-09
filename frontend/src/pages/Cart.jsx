import Navigator from "../components/Navigator";
import Footer from "../components/Footer";

import CartProduct from "../components/CartProduct";

export default function Cart() {
  return (
    <>
      <Navigator />

      <div className="container mx-auto mt-32 p-5 md:mt-40">
        <h2 className="text-4xl font-bold md:pb-5 md:text-6xl">Your cart</h2>
      </div>

      <section className="container mx-auto p-5">
        <div className="flex flex-col justify-between gap-3 md:flex-row">
          {/* cart items */}
          <div className="flex w-full flex-wrap gap-5">
            {/* product-cart */}
            <CartProduct />

            {/* product-cart */}
            <CartProduct />

            {/* product-cart */}
            <CartProduct />

            {/* product-cart */}
            <CartProduct />
          </div>

          {/* cart info */}
          <div className="w-full md:w-7/12 lg:w-4/12 xl:w-3/12">
            <h3 className="mt-5 text-lg font-medium">Subtotal</h3>
            <div className="mt-2 flex justify-between">
              <p className="text-lg font-medium">Total:</p>
              <p className="text-xl">₱ 100,000.00</p>
            </div>
            <button className="my-5 w-full rounded-3xl bg-orange-500 py-5 text-white">
              Go To Checkout
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
