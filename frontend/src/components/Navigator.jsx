import {
  faBars,
  faCartShopping,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";

import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";

import { Checkbox, Dropdown, Label, Modal, TextInput } from "flowbite-react";

import { login, logout } from "../redux/AuthSlice";

export default function Navigator() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  const [email, setEmail] = useState("wilhelmus.olejr@gmail.com");
  const [password, setPassword] = useState("carpediem");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState(null);

  function onCloseModal() {
    setLoginModal(false);
    setRegisterModal(false);
  }

  function handleLoginSubmit(e) {
    e.preventDefault();

    if (email === "wilhelmus.olejr@gmail.com" && password === "carpediem") {
      let userData = {
        user: {
          id: 1,
          name: "Wilhelmus Ole",
          email: "wilhelmus.olejr@gmail.com",
        },
        token: "sample-jwt-token",
      };

      dispatch(login(userData));
      onCloseModal();
    } else {
      setError("Invalid email or password");
    }
  }

  return (
    <>
      <nav className="fixed top-0 z-10 w-full bg-white py-10 shadow-md">
        <div
          className={`${isMenuOpen ? "flex-col" : "flex-row items-center"} container mx-auto flex justify-between px-5`}
        >
          <div className="logo text-xl font-semibold">
            {/* <a href="/">PinasMura</a> */}
            <a href="/">
              <img src={logo3} alt="" className="h-10" />
            </a>
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
            <div className="cart flex items-center">
              <a href="/cart" className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCartShopping} />
                Cart {items.length > 0 && `(${items.length})`}
              </a>
            </div>
            <div className="account">
              {user ? (
                <Dropdown
                  label={[
                    <FontAwesomeIcon
                      icon={faUser}
                      key="icon"
                      className="pr-2"
                    />,
                    " My account",
                  ]}
                  dismissOnClick={false}
                  inline
                >
                  <Dropdown.Item>Profile</Dropdown.Item>
                  <Dropdown.Item>Order</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    Sign out
                  </Dropdown.Item>
                </Dropdown>
              ) : (
                <Button
                  href="/login"
                  className="flex items-center gap-2"
                  onClick={() => setLoginModal(true)}
                >
                  Login
                </Button>
              )}
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

      {!user && (
        <>
          {/* login */}
          <Modal
            show={loginModal}
            size="md"
            onClose={onCloseModal}
            popup
            dismissible
            className="flex items-center justify-center bg-black bg-opacity-50"
          >
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Sign in to our platform
                </h3>
                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  {error && (
                    <p className="rounded-xl border border-rose-700 bg-rose-200 p-2 text-rose-500">
                      {error}
                    </p>
                  )}
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email" value="Your email" />
                    </div>
                    <TextInput
                      id="email"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="password" value="Your password" />
                    </div>
                    <TextInput
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
                    >
                      Lost Password?
                    </a>
                  </div>
                  <div className="w-full">
                    <Button>Log in to your account</Button>
                  </div>
                </form>
                <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?&nbsp;
                  <a
                    href="#"
                    className="text-cyan-700 hover:underline dark:text-cyan-500"
                    onClick={(e) => {
                      e.preventDefault();

                      setLoginModal(false);
                      setRegisterModal(true);
                    }}
                  >
                    Create account
                  </a>
                </div>
              </div>
            </Modal.Body>
          </Modal>

          {/* register */}
          <Modal
            show={registerModal}
            size="md"
            onClose={onCloseModal}
            popup
            dismissible
            className="flex items-center justify-center bg-black bg-opacity-50"
          >
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Register for an account
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                  </div>
                  <TextInput
                    id="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="Password" />
                  </div>
                  <TextInput
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="confirmPassword" value="Confirm Password" />
                  </div>
                  <TextInput
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    required
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">
                    I agree to the
                    <a
                      href="#"
                      className="ms-1 text-cyan-700 hover:underline dark:text-cyan-500"
                    >
                      terms and conditions
                    </a>
                  </Label>
                </div>
                <div className="w-full">
                  <Button>Register</Button>
                </div>
                <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                  Already have an account?&nbsp;
                  <a
                    href="#"
                    className="text-cyan-700 hover:underline dark:text-cyan-500"
                    onClick={(e) => {
                      e.preventDefault();

                      setRegisterModal(false);
                      setLoginModal(true);
                    }}
                  >
                    Sign in
                  </a>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
}
