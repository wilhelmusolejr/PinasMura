// library
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// some library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// components
import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import Button from "../components/Button";
import ProductColorIndicator from "../components/ProductColorIndicator";
import ProductList from "../components/ProductList";
import Product from "../components/Product";
import Loader from "../components/Loader";

// config
import { API_URL, IMG_URL } from "../config.jsx";
import { useDispatch } from "react-redux";

// redux
import { addToCartAsync, addItem } from "../redux/CartSlice";

import data_json from "../data/data.json";
import ImgLoader from "../components/ImgLoader.jsx";
let app_stack = "frontend";

export default function ProductPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate hook instead of Navigate component
  const [imgLoading, setImgLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/products/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (app_stack === "fullstack") {
      fetchProducts();
    } else {
      data_json.forEach((product) => {
        if (product.id === parseInt(id)) {
          setProduct(product);
          setLoading(false);
          console.log(product);
        }
      });
    }
  }, [id]);

  useEffect(() => {
    if (product === null) return;

    let temp = [];

    if (product.id > 8) {
      for (let i = 0; i < 4; i++) {
        let random = Math.floor(Math.random() * (16 - 9 + 1) + 9);
        let rand_data = data_json[random - 1];

        if (!temp.includes(rand_data)) {
          temp.push(rand_data);
        } else {
          i--;
        }
      }

      setRelatedProducts(temp);
    } else {
      for (let i = 0; i < 4; i++) {
        let random = Math.floor(Math.random() * (8 - 1 + 1) + 1);
        let rand_data = data_json[random - 1];

        if (!temp.includes(rand_data)) {
          temp.push(rand_data);
        } else {
          i--;
        }
      }

      setRelatedProducts(temp);
    }
  }, [product]);

  function addToCart(data) {
    if (app_stack === "fullstack") {
      dispatch(addToCartAsync(data));
    }
    dispatch(addItem(data));
    navigate("/cart");
  }

  document.title = product?.name + " | PinasMura";

  return (
    <>
      <Navigator />

      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="container mx-auto mt-40 p-5">
            <div className="flex flex-col justify-center gap-3 md:flex-row md:gap-5">
              <div className="product-image relative flex w-full items-center justify-center rounded-xl bg-gray-100 p-10 md:w-5/12">
                <img
                  src={IMG_URL + "/" + product.image}
                  alt={product.name + " image product"}
                  onLoad={() => {
                    setImgLoading(false);
                  }}
                />

                {imgLoading && <ImgLoader />}
              </div>
              <div className="product my-5 md:w-5/12">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex gap-2">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                  </div>
                  <p>{product.rate}</p>
                </div>

                <h1 className="my-5 text-3xl font-bold md:text-4xl lg:text-5xl">
                  {product.name}
                </h1>

                <p>{product.description}</p>

                <h2 className="my-5 text-base font-medium">
                  ₱ {product.price}
                </h2>

                {product.options.colors && (
                  <div className="my-5 flex flex-col gap-2">
                    <div className="flex gap-1">
                      <p>Selected color:</p>
                      <p>Light Quartz Gray</p>
                    </div>
                    <div className="flex gap-2">
                      {product.options.colors.map((color) => (
                        <ProductColorIndicator
                          key={color.id}
                          size={"5"}
                          className={`bg-${color.color}-500`}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <Button
                  className="my-5"
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </section>

          {relatedProducts && (
            <>
              <div className="container mx-auto mt-32 p-5 md:mt-40">
                <h2 className="text-2xl font-bold md:text-4xl">
                  Related products
                </h2>
              </div>

              <section className="container mx-auto my-10 px-5">
                <ProductList>
                  {relatedProducts.map((product) => (
                    <Product key={product.id} product={product} />
                  ))}
                </ProductList>
              </section>
            </>
          )}

          {/* <Toast className="fixed w-11/12 bottom-10 right-2 md:bottom-10 md:right-10">
            <div className="inline-flex items-center justify-center w-8 h-8 text-green-500 bg-green-100 rounded-lg shrink-0 dark:bg-green-800 dark:text-green-200">
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
            <div className="ml-3 text-sm font-normal">
              {product.name} has been added to your cart
            </div>
            <Toast.Toggle />
          </Toast> */}

          <Footer />
        </>
      )}
    </>
  );
}
