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

const RandomButton = ({
    onButtonClick,
}) => {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            <Button
                variant="outlined"
                onClick={(e) => onButtonClick()}>
                Random
            </Button>
        </div>
    )
}

export default RandomButton;
