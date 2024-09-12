import Footer from "../components/Footer";
import Navigator from "../components/Navigator";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons"; // Regular icons
import Heading from "../components/Heading";
import Button from "../components/Button";

import Confetti from "react-confetti";
import { useSelector } from "react-redux";

import { IMG_URL } from "../config.jsx";
import Loader from "../components/Loader.jsx";

export default function Order() {
  const { items, order_number } = useSelector((state) => state.cart);

  if (!items || !order_number) {
    return (
      <>
        <Navigator />

        <div className="relative min-h-screen">
          <div className="absolute left-2/4 top-2/4">
            <Loader />
          </div>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      {/* confetti */}
      <div className="overflow-hidden">
        <Confetti
          width={window.innerWidth - 100}
          height={window.innerHeight}
          recycle={false}
        />
      </div>

      <Navigator />

      <section className="container mx-auto mt-40 px-5 text-center">
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="my-3 text-5xl text-green-500"
        />

        <Heading className="md:pb-5">Thank you for your order!</Heading>
        <p className="my-5">
          Order #{order_number} has been submitted. <br />
          An email confirmation has been sent to tite@gmail.com.
        </p>
      </section>
      <section className="container mx-auto my-10 px-5">
        <div className="flex flex-col items-center justify-center gap-3">
          {items.map((product, index) => (
            <div
              key={product.id}
              className="order-item flex w-full gap-3 border p-3 md:w-1/4"
            >
              <div className="product-image w-24">
                <img src={IMG_URL + "/" + product.image} alt="" />
              </div>
              <div className="product-info">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm">
                  Quantity: {items[index].quantity} pc
                  {items[index].quantity > 1 ? "s" : ""}
                </p>
                <p className="text-sm">₱ {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="my-20 text-center">
        <Button>Track your order</Button>
      </div>

      <Footer />
    </>
  );
}
