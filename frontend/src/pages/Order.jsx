import Footer from "../components/Footer";
import Navigator from "../components/Navigator";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons"; // Regular icons
import Heading from "../components/Heading";
import Button from "../components/Button";

import Confetti from "react-confetti";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { API_URL, IMG_URL } from "../config.jsx";

export default function Order() {
  const items = useSelector((state) => state.cart.items);
  const navigate = useNavigate(); // Use useNavigate hook instead of Navigate component

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  const totalPrice = products?.reduce((total, product, index) => {
    return total + product.price * items[index].quantity;
  }, 0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const ids = items.map((item) => item.id);

        const response = await fetch(`${API_URL}/products/list`, {
          method: "POST", // Use POST to send data
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify({ ids }), // Send the array of IDs in the body of the request
        });

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [items.length]);

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
          {products &&
            products.map((product, index) => (
              <>
                {/* item */}
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
              </>
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
