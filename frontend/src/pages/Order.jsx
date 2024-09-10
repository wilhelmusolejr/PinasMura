import Footer from "../components/Footer";
import Navigator from "../components/Navigator";

import product from "../assets/sweater1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons"; // Regular icons
import Heading from "../components/Heading";
import Button from "../components/Button";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons"; // Solid icons
// import { faFacebook } from "@fortawesome/free-brands-svg-icons"; // Brand icons

import Confetti from "react-confetti";

export default function Order() {
  return (
    <>
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
          Order #5252 has been submitted. <br />
          An email confirmation has been sent to tite@gmail.com.
        </p>
      </section>
      <section className="container mx-auto my-10 px-5">
        <div className="flex flex-col items-center justify-center gap-3">
          {/* item */}
          <div className="order-item flex w-full border p-3 md:w-1/4">
            <div className="product-image w-24">
              <img src={product} alt="" />
            </div>
            <div className="product-info">
              <h3 className="text-lg font-semibold">Sweater</h3>
              <p></p>
              <p className="text-sm">₱ 500.00</p>
            </div>
          </div>

          {/* item */}
          <div className="order-item flex w-full border p-3 md:w-1/4">
            <div className="product-image w-24">
              <img src={product} alt="" />
            </div>
            <div className="product-info">
              <h3 className="text-lg font-semibold">Sweater</h3>
              <p></p>
              <p className="text-sm">₱ 500.00</p>
            </div>
          </div>
        </div>
      </section>
      <div className="my-20 text-center">
        <Button>Track your order</Button>
      </div>
      <Footer />
    </>
  );
}
