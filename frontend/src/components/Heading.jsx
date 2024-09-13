import PropTypes from "prop-types";

export default function Heading({ children, className = "", size = "4xl" }) {
  return (
    <h1 className={`${className} text-${size} font-bold md:text-6xl`}>
      {children}
    </h1>
  );
}

Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
};
