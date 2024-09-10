import PropTypes from "prop-types";

export default function ProductColorIndicator({ className = "", size = "3" }) {
  return (
    <div
      className={`product-color h-${size} w-${size} rounded-full ${className}`}
    ></div>
  );
}

ProductColorIndicator.propTypes = {
  className: PropTypes.string, // Validate className as a string
  size: PropTypes.string, // Validate size as a string
};
