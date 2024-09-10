import PropTypes from "prop-types";

export default function Heading({ children, className = "" }) {
  return (
    <h1 className={`${className} text-4xl font-bold md:text-6xl`}>
      {children}
    </h1>
  );
}

Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
