import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1)
        }
    }
}));

// const chooseRandomShow = (brands, seasons, years) => {
//     debugger;
//     if (brands.length) {
//     const randomBrand = brands[Math.floor(Math.random() * brands.length)];
//     const randomYear = years[Math.floor(Math.random() * years.length)];
//     const randomSeason = seasons[Math.floor(Math.random() * seasons.length)];
//     return ({randomBrand, randomSeason, randomYear})
//     }
//   };


const RandomButton = ({
    onSelectionChange,
    // brands,
    // seasons,
    // years,
    selectedOptions
}) => {
    const classes= useStyles();
    // const randomShow = chooseRandomShow(brands, seasons, years);

    return (
        <div className={classes.root}>
            <Button
                variant="outlined"
                onClick={(e) => onSelectionChange()}>
                Random
            </Button>
        </div>
    )
}

export default RandomButton;
