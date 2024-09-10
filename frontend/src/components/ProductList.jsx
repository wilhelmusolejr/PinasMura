import PropTypes from "prop-types";

import styles from "./ProductList.module.css";

export default function ProductList({ children }) {
  return (
    <div
      className={`scrollbar-hide my-10 flex gap-3 overflow-x-auto lg:gap-5 ${styles["product-list"]}`}
    >
      {children}
    </div>
  );
}

ProductList.propTypes = {
  children: PropTypes.node, // Validate children as a node
};
