import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductColorIndicator from "./ProductColorIndicator";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./Product.module.css";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";

import clothe1 from "../assets/clothe1.png";
import clothe2 from "../assets/clothe2.png";
import clothe3 from "../assets/clothe3.png";
import clothe4 from "../assets/clothe4.png";
import clothe5 from "../assets/clothe5.png";
import clothe6 from "../assets/clothe6.png";
import clothe7 from "../assets/clothe7.png";
import clothe8 from "../assets/clothe8.png";

export default function Product() {
  const tailwindColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-teal-500",
    "bg-indigo-500",
    "bg-gray-500",
  ];

  const clothingItems = [
    "Sweater",
    "T-Shirt",
    "Jeans",
    "Hoodie",
    "Jacket",
    "Dress",
    "Skirt",
    "Blouse",
    "Shorts",
    "Tank Top",
    "Cardigan",
    "Polo Shirt",
    "Tracksuit",
    "Cargo Pants",
    "tite",
  ];

  const productImages = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    clothe1,
    clothe2,
    clothe3,
    clothe4,
    clothe5,
    clothe6,
    clothe7,
    clothe8,
  ];

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let randomClothingItem = Math.floor(Math.random() * clothingItems.length);
  let randomImage = Math.floor(Math.random() * productImages.length);

  let colors = [];

  for (let i = 0; i < randomNumber; i++) {
    colors.push(
      tailwindColors[Math.floor(Math.random() * tailwindColors.length)],
    );
  }

  return (
    <div className={`product`}>
      {/* image */}
      <a href="/product">
        <div
          className={`${styles["product-image"]} group relative flex items-center justify-center rounded-xl bg-gray-100 p-10`}
        >
          <img
            src={productImages[randomImage]}
            className={`${styles["image"]}`}
          />
          <div className="product-available-color absolute right-5 top-5 flex gap-2">
            {colors.map((color, index) => (
              <ProductColorIndicator key={index} className={color} />
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
        <h2 className="text-xl font-semibold">
          {clothingItems[randomClothingItem]}
        </h2>
        <p className="pb-2 text-xs">Lorem ipsum dolor sit amet consectetur</p>
        <p className="text-base font-medium">₱ 1,000.00</p>
      </div>
    </div>
  );
}
