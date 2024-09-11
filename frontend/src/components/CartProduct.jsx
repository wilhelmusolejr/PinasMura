import propTypes from "prop-types";

// some library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

// api
import { IMG_URL } from "../config";

export default function CartProduct({ product, item }) {
  return (
    <div className="product-cart relative flex w-full gap-3 lg:w-5/12">
      <div className="">
        <a href="/product">
          <div className="product-image rounded-md border bg-gray-100 p-3">
            <img src={IMG_URL + "/" + product.image} alt="" className="h-20" />
          </div>
        </a>
        <div className="flex items-center justify-between p-2">
          <FontAwesomeIcon icon={faMinus} />
          <div className="">{item.quantity}</div>
          <FontAwesomeIcon icon={faPlus} />
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
  item: propTypes.object.isRequired,
};
