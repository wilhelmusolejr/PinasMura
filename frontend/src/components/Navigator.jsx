import {
  faBars,
  faCartShopping,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import { useSelector } from "react-redux";

export default function Navigator() {
  const items = useSelector((state) => state.cart.items);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-10 w-full bg-white py-10 shadow-md">
      <div
        className={`${isMenuOpen ? "flex-col" : "flex-row items-center"} container mx-auto flex justify-between px-5`}
      >
        <div className="logo text-xl font-semibold">
          <a href="/">PinasMura</a>
        </div>

        <ul
          className={`nav-link-parent ${isMenuOpen ? "flex-col" : "hidden md:flex"} my-10 flex gap-3 md:my-0 md:gap-5`}
        >
          <li className="nav-item">
            <a href="#">Shop</a>
          </li>
          <li className="nav-item">
            <a href="#">Collections</a>
          </li>
          <li className="nav-item">
            <a href="#">Explore</a>
          </li>
        </ul>

        <div
          className={`${isMenuOpen ? "" : "hidden md:flex"} nav-option-parent mt-4 flex justify-between gap-3 md:mt-0 md:gap-5`}
        >
          <div className="cart">
            <a href="/cart" className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCartShopping} />
              Cart {items.length > 0 && `(${items.length})`}
            </a>
          </div>
          <div className="account">
            <a href="#" className="flex items-center gap-2">
              <FontAwesomeIcon icon={faUser} /> My account
            </a>
          </div>
        </div>

        <div className="fa-bars md:hidden">
          <FontAwesomeIcon
            icon={isMenuOpen ? faTimes : faBars}
            className={`${isMenuOpen ? "absolute right-5 top-5" : ""}`}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        </div>
      </div>
    </nav>
  );
}
