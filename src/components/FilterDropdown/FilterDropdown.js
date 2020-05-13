import React, {useState} from "react";
import PropTypes from "prop-types";
import "./FilterDropdown.scss";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

// export const FilterDropdown = ({
//   options,
//   selectedOption,
//   onSelectionChange,
// }) => (
//   <span>
//     <select
//       onChange={(e) => onSelectionChange(e.target.value)}
//       value={selectedOption}
//     >
//       {options.map((option) => (
//         <option value={option} key={option}>
//           {option}
//         </option>
//       ))}
//     </select>
//   </span>
// );

// export default FilterDropdown;

// FilterDropdown.propTypes = {
//   values: PropTypes.arrayOf(PropTypes.string).isRequired,
//   selectedIndex: PropTypes.number.isRequired,
//   onSelectionChange: PropTypes.func.isRequired,
// };

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const FilterDropdown = ({
    options,
    selectedOptions,
    onSelectionChange
  }) => {
    const classes = useStyles();
    // const [dropdownOption, setDropdownOption] = React.useState([]);

    // const onSelectionChange = (event) => {
    //   setDropdownOption(event.target.value);
    // };

    return (
      <span>
        <FormControl className={classes.formControl}>
        <InputLabel>Label</InputLabel>
          <Select
            multiple value={[options[0]]}
            onChange={(e) => onSelectionChange(e.target.value)}
            renderValue={(selectedOptions) => (
              <div className={classes.chips}>
                {selectedOptions.map((value) => (
                  <Chip key={value} label={value} className={classes.chip} />
              ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
          </Select>
        </FormControl>
      </span>
    );
  }

export default FilterDropdown;


// FilterDropdown.propTypes = {
//   values: PropTypes.arrayOf(PropTypes.string).isRequired,
//   selectedIndex: PropTypes.number.isRequired,
//   onSelectionChange: PropTypes.func.isRequired,
// };
