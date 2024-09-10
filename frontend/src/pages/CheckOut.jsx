import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import LabelAndInput from "../components/LabelAndInput";
import Heading from "../components/Heading";
import Button from "../components/Button";

export default function CheckOut() {
  return (
    <>
      <Navigator />

      <section className="container mx-auto mt-40 px-5">
        <Heading className="md:pb-5">Checkout</Heading>
      </section>

      <section className="container mx-auto my-10 px-5">
        <form className="mx-auto max-w-sm">
          <LabelAndInput id="FullName" label="Name" />
          <LabelAndInput id="address" label="Address" />

          <p className="my-5 text-right">10 items</p>

          <div className="w-full">
            <h2 className="mt-5 text-lg font-medium">Subtotal</h2>
            <div className="mt-2 flex justify-between">
              <p className="text-lg font-medium">Total:</p>
              <p className="text-xl">₱ 100,000.00</p>
            </div>

            <Button className="my-10 w-full">Go To Checkout</Button>
          </div>
        </form>
      </section>

      <Footer />
    </>
  );
}
