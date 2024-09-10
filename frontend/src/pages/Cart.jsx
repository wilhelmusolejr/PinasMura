import Navigator from "../components/Navigator";
import Footer from "../components/Footer";

import CartProduct from "../components/CartProduct";
import Heading from "../components/Heading";
import Button from "../components/Button";

export default function Cart() {
  return (
    <>
      <Navigator />

      <div className="container mx-auto mt-32 p-5 md:mt-40">
        <Heading className="md:pb-5">Your cart</Heading>
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
            <h2 className="mt-5 text-lg font-medium">Subtotal</h2>
            <div className="mt-2 flex justify-between">
              <p className="text-lg font-medium">Total:</p>
              <p className="text-xl">₱ 100,000.00</p>
            </div>

            <Button className="my-5 w-full">Go To Checkout</Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
