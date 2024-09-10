import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import LabelAndInput from "../components/LabelAndInput";

export default function CheckOut() {
  return (
    <>
      <Navigator />

      <section className="container mx-auto mt-40 px-5">
        <h1 className="text-4xl font-bold md:pb-5 md:text-6xl">Checkout</h1>
      </section>

      <section className="container mx-auto my-10 px-5">
        <form className="mx-auto max-w-sm">
          <LabelAndInput id="FullName" label="Full name" />
          <LabelAndInput id="address" label="Full address" />

          <p className="my-5 text-right">10 items</p>

          <div className="w-full">
            <h2 className="mt-5 text-lg font-medium">Subtotal</h2>
            <div className="mt-2 flex justify-between">
              <p className="text-lg font-medium">Total:</p>
              <p className="text-xl">₱ 100,000.00</p>
            </div>

            <a href="/order">
              <button className="my-5 w-full rounded-3xl bg-orange-500 py-5 text-white">
                Go To Checkout
              </button>
            </a>
          </div>
        </form>
      </section>

      <Footer />
    </>
  );
}
