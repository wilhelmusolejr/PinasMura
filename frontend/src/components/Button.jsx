import PropTypes from "prop-types";

export default function Button({
  children,
  className = "",
  color = "blue",
  onClick = () => {},
}) {
  return (
    <>
      <button
        onClick={onClick}
        className={`${className} rounded-xl bg-${color}-700 px-5 py-3 text-white`}
      >
        {children}
      </button>
    </>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
};
