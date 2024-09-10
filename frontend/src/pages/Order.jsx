import Footer from "../components/Footer";
import Navigator from "../components/Navigator";

import product from "../assets/sweater1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons"; // Regular icons
// import { faCoffee } from "@fortawesome/free-solid-svg-icons"; // Solid icons
// import { faFacebook } from "@fortawesome/free-brands-svg-icons"; // Brand icons

export default function Order() {
  return (
    <>
      <Navigator />

      <section className="container mx-auto mt-40 px-5 text-center">
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="my-3 text-5xl text-green-500"
        />
        <h1 className="text-4xl font-bold md:pb-5 md:text-6xl">
          Thank you for your order!
        </h1>
        <p>Order #5252 has been submitted</p>
      </section>

      <section className="container mx-auto my-10 px-5">
        <div className="flex flex-col items-center justify-center gap-3">
          {/* item */}
          <div className="order-item flex w-1/4 border p-3">
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
          <div className="order-item flex w-1/4 border p-3">
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

      <Footer />
    </>
  );
}
