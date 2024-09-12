import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import LabelAndInput from "../components/LabelAndInput";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

// API
import { API_URL } from "../config.jsx";
import { useNavigate } from "react-router-dom";

export default function CheckOut() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook instead of Navigate component

  const { items } = useSelector((state) => state.cart);

  const totalPrice = items?.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  console.log(items);

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/order");
  }

  return (
    <>
      <Navigator />

      <section className="container mx-auto mt-40 px-5">
        <Heading className="md:pb-5">Checkout</Heading>
      </section>

      <section className="container mx-auto my-10 px-5">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="mx-auto max-w-sm"
        >
          <LabelAndInput id="FullName" label="Name" state={[name, setName]} />
          <LabelAndInput
            id="address"
            label="Address"
            state={[address, setAddress]}
          />

          <p className="my-5 text-right">
            {items.length} item{items.length > 1 ? "s" : ""}
          </p>

          <div className="w-full">
            <h2 className="mt-5 text-lg font-medium">Subtotal</h2>
            <div className="mt-2 flex justify-between">
              <p className="text-lg font-medium">Total:</p>
              <p className="text-xl">₱ {totalPrice}</p>
            </div>

            <Button className="my-10 w-full">Go To Checkout</Button>
          </div>
        </form>
      </section>

      <Footer />
    </>
  );
}
