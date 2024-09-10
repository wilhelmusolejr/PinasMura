import PropTypes from "prop-types";

export default function Button({ children, className = "" }) {
  return (
    <>
      <button
        className={`${className} rounded-xl bg-orange-500 px-5 py-3 text-white`}
      >
        {children}
      </button>
    </>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
