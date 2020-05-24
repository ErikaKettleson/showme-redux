import React from "react";
import "./FilterDropdown.scss";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 400
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
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
    onSelectionChange,
    label
  }) => {
    const classes = useStyles();

    return (
      <span>
        <FormControl className={classes.formControl}>
        <InputLabel>{label}</InputLabel>
          <Select
            multiple value={selectedOptions}
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
