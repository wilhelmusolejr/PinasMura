import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import product from "../assets/sweater1.png";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function CartProduct() {
  return (
    <div className="product-cart relative flex w-full gap-3 lg:w-5/12">
      <div className="">
        <a href="/product">
          <div className="product-image rounded-md border bg-gray-100 p-3">
            <img src={product} alt="" className="h-20" />
          </div>
        </a>
        <div className="flex items-center justify-between p-2">
          <FontAwesomeIcon icon={faMinus} />
          <div className="">1</div>
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
      <div className="product-info">
        <h3 className="text-lg font-semibold">Sweater</h3>
        <p className="text-sm">₱ 500.00</p>
      </div>
    </div>
  );
}
