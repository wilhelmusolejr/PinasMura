import PropTypes from "prop-types";

export default function ProductColorIndicator({ className = "" }) {
  return (
    <div className={`product-color h-3 w-3 rounded-full ${className}`}></div>
  );
}

ProductColorIndicator.propTypes = {
  className: PropTypes.string, // Validate className as a string
};
