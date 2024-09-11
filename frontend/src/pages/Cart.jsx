import Navigator from "../components/Navigator";
import Footer from "../components/Footer";

import CartProduct from "../components/CartProduct";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { API_URL } from "../config.jsx";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);

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
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [items]);

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
            {products ? (
              products.map((product, index) => (
                <CartProduct
                  key={product.id}
                  product={product}
                  item={items[index]}
                />
              ))
            ) : (
              <h2>EMPTY CART</h2>
            )}
          </div>

          {/* cart info */}
          <div className="w-full md:w-7/12 lg:w-4/12 xl:w-3/12">
            <h2 className="mt-5 text-lg font-medium">Subtotal</h2>
            <div className="mt-2 flex justify-between">
              <p className="text-lg font-medium">Total:</p>
              <p className="text-xl">₱ {totalPrice}</p>
            </div>

            <Button className="my-5 w-full">Go To Checkout</Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
