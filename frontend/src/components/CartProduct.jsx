import propTypes from "prop-types";

// some library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

// api
import { IMG_URL } from "../config";
import { useDispatch } from "react-redux";

// redux
import { increaseQuantity, decreaseQuantity } from "../redux/CartSlice";
import ImgLoader from "./ImgLoader";
import { useState } from "react";

export default function CartProduct({ product }) {
  const dispatch = useDispatch();
  const [imgLoading, setImgLoading] = useState(true);

  function handleIncreaseQuantity(id) {
    dispatch(increaseQuantity({ id: id }));
  }

  function handleDecreaseQuantity(id) {
    dispatch(decreaseQuantity({ id: id }));
  }

  return (
    <div className="product-cart relative flex w-full gap-3 lg:w-5/12">
      <div className="">
        <a href={"/product/" + product.id}>
          <div className="product-image rounded-md border bg-gray-100 p-3">
            <img
              src={IMG_URL + "/" + product.image}
              alt=""
              className="h-20"
              onLoad={() => {
                setImgLoading(false);
              }}
            />

            {imgLoading && <ImgLoader />}
          </div>
        </a>
        <div className="flex items-center justify-between p-2">
          <FontAwesomeIcon
            icon={faMinus}
            className="cursor-pointer"
            onClick={() => {
              handleDecreaseQuantity(product.id);
            }}
          />
          <div className="">{product.quantity}</div>
          <FontAwesomeIcon
            icon={faPlus}
            className="cursor-pointer"
            onClick={() => {
              handleIncreaseQuantity(product.id);
            }}
          />
        </div>
      </div>
      <div className="product-info">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm">₱ {product.price}</p>
      </div>
    </div>
  );
}

CartProduct.propTypes = {
  product: propTypes.object.isRequired,
};
