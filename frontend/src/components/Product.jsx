// library
import PropTypes from "prop-types";

// some library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons";

// components
import ProductColorIndicator from "./ProductColorIndicator";

// style
import styles from "./Product.module.css";

// config
import { IMG_URL } from "../config.jsx";

export default function Product({ product }) {
  function stringCutter(str, maxLength) {
    // If the string is longer than 30 characters, cut it and add "..."
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }

    // Return the original string if it's shorter than 30 characters
    return str;
  }

  product.description = stringCutter(product.description, 30);

  return (
    <div className={`product`}>
      {/* image */}
      <a href={`/product/${product.id}`}>
        <div
          className={`${styles["product-image"]} group relative flex items-center justify-center rounded-xl bg-gray-100 p-10`}
        >
          <img
            src={IMG_URL + "/" + product.image}
            className={`${styles["image"]}`}
          />
          <div className="product-available-color absolute right-5 top-5 flex gap-2">
            {product.options.colors &&
              product.options.colors.map((color, index) => (
                <ProductColorIndicator
                  key={index}
                  className={`bg-${color.color}-500`}
                />
              ))}
          </div>
          <div
            className="absolute bottom-5 right-5 hidden group-hover:block"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border bg-white">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        </div>
      </a>
      {/* info */}
      <div className="product-info flex flex-col pt-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <div className="flex items-center justify-center gap-1 text-sm">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <p>{product.rate}</p>
          </div>
        </div>
        <p className="w-11/12 pb-2 text-xs">{product.description}</p>
        <p className="text-base font-normal">₱ {product.price}</p>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object,
};
