// import PropTypes from "prop-types";

import product from "../assets/clothe8.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function ProductSlider() {
  return (
    <div className="product-container w-full rounded-xl bg-gray-200 p-5 md:p-10">
      <div className="flex items-center justify-between">
        {/* info */}
        <div className="product-info">
          <h2 className="text-xl md:text-2xl">Sweater</h2>
          <p className="text-xs">Lorem ipsum dolor sit amet consectetur</p>
          {/* <p className="text-base font-semibold">₱ 1,000.00</p> */}
        </div>
        {/* available color */}
        <div className="product-available-color flex gap-1">
          <div className="product-color h-3 w-3 rounded-full bg-green-500"></div>
          <div className="product-color h-3 w-3 rounded-full bg-blue-500"></div>
          <div className="product-color h-3 w-3 rounded-full bg-violet-500"></div>
        </div>
      </div>
      <div className="product-image mx-auto flex max-w-md p-10">
        <img src={product} alt="" className="" />
      </div>

      <div className="flex justify-between">
        {/* page */}
        <div className="">
          <p className="text-xl font-thin md:text-2xl">1/12</p>
        </div>
        {/* button */}
        <div className="flex gap-2">
          <div className="product-slider-prev flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white">
            <FontAwesomeIcon icon={faAngleLeft} className="text-gray-500" />
          </div>
          <div className="product-slider-prev flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white">
            <FontAwesomeIcon icon={faAngleRight} className="text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
