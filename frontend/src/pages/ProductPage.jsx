// asset

import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import Button from "../components/Button";
import ProductColorIndicator from "../components/ProductColorIndicator";
import Heading from "../components/Heading";
import ProductList from "../components/ProductList";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let URL = `http://127.0.0.1:8000/api/`;
let IMG_URL = `http://127.0.0.1:8000/storage/`;

export default function ProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${URL}products/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProduct(data);

        console.log(id);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  let four_products = product?.related_products;
  console.log(four_products);

  return (
    <>
      <Navigator />

      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="container mx-auto mt-40 p-5">
            <div className="flex flex-col justify-center gap-3 md:flex-row md:gap-5">
              <div className="product-image flex w-full items-center justify-center rounded-xl bg-gray-100 p-10 md:w-5/12">
                <img src={IMG_URL + product.image} alt="" />
              </div>
              <div className="product my-5 md:w-5/12">
                <div className="mb-10 flex items-center gap-3">
                  <div className="flex gap-2">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500"
                    />
                  </div>
                  <p>{product.rate}</p>
                </div>

                <Heading className="md:pb-5">{product.name}</Heading>

                <p>{product.description}</p>

                <div className="my-5 flex flex-col gap-2">
                  <div className="flex gap-1">
                    <p>Selected color:</p>
                    <p>Light Quartz Gray</p>
                  </div>
                  <div className="flex gap-2">
                    <ProductColorIndicator className="bg-orange-500" />
                    <ProductColorIndicator className="bg-red-500" />
                    <ProductColorIndicator className="bg-blue-500" />
                  </div>
                </div>

                <Button className="my-5">Add to cart</Button>
              </div>
            </div>
          </section>

          {four_products && (
            <>
              <div className="container mx-auto mt-32 p-5 md:mt-40">
                <h2 className="text-2xl font-bold md:text-4xl">
                  Related products
                </h2>
              </div>

              <section className="container mx-auto my-10 px-5">
                <ProductList>
                  {four_products.map((product) => (
                    <Product key={product.id} product={product} />
                  ))}
                </ProductList>
              </section>
            </>
          )}

          <Footer />
        </>
      )}
    </>
  );
}
