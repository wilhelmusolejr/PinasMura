import PropTypes from "prop-types";

export default function LabelAndInput({
  type = "text",
  id,
  label,
  placeholder = "",
}) {
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

LabelAndInput.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
