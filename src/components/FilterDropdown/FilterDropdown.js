import React from "react";
import PropTypes from "prop-types";
import "./FilterDropdown.scss";

export const FilterDropdown = ({
  options,
  selectedOption,
  onSelectionChange,
}) => (
  <div>
    <select
      onChange={(e) => onSelectionChange(e.target.value)}
      value={selectedOption}
    >
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default FilterDropdown;

FilterDropdown.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onSelectionChange: PropTypes.func.isRequired,
};
