import PropTypes from "prop-types";

export default function Button({
  children,
  className = "",
  color = "orange",
  onClick = () => {},
}) {
  return (
    <>
      <button
        onClick={onClick}
        className={`${className} rounded-xl bg-${color}-500 px-5 py-3 text-white`}
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
