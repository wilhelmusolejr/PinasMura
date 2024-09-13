import Navigator from "../components/Navigator";
import Footer from "../components/Footer";

import CartProduct from "../components/CartProduct";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { API_URL } from "../config.jsx";
import { useNavigate } from "react-router-dom";

import { setCartItems, setLoading } from "../redux/CartSlice";
import Loader from "../components/Loader.jsx";

let app_stack = "frontend";

export default function Cart() {
  // const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const { loading, items } = useSelector((state) => state.cart);
  const navigate = useNavigate(); // Use useNavigate hook instead of Navigate component

  const totalPrice = items?.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch(setLoading(true));

        let user_id = 1;

        // fetch products
        const response = await fetch(`${API_URL}/cart`, {
          method: "POST", // Use POST to send data
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify({ user_id }), // Send the array of IDs in the body of the request
        });

        const data = await response.json();

        console.log(data);

        // Map through products and set the quantity from cart
        const productsWithQuantities = data.map(({ product, quantity }) => {
          return { ...product, quantity };
        });

        dispatch(setCartItems({ product: productsWithQuantities }));
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    if (app_stack === "fullstack") {
      fetchProducts();
    } else {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  useEffect(() => {
    document.title = `Cart (${items.length}) | PinasMuna`;
  }, [items.length]);

  if (loading) {
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
      <Navigator />

      <div className="container mx-auto mt-32 p-5 md:mt-40">
        <Heading className="md:pb-5">Your cart</Heading>
      </div>

      <section className="container mx-auto p-5">
        <div className="flex flex-col justify-between gap-3 md:flex-row">
          {/* cart items */}
          <div className="flex w-full flex-wrap gap-5">
            {items.map((item) => (
              <CartProduct key={item.id} product={item} />
            ))}
          </div>

          {/* cart info */}
          <div className="w-full md:w-7/12 lg:w-4/12 xl:w-3/12">
            <h2 className="mt-5 text-lg font-medium">Subtotal</h2>
            <div className="mt-2 flex justify-between">
              <p className="text-lg font-medium">Total:</p>
              <p className="text-xl">₱ {totalPrice}</p>
            </div>

            <Button
              className="my-5 w-full"
              onClick={() => {
                if (items.length > 0) {
                  navigate("/cart/product");
                }
              }}
            >
              Go To Checkout
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
