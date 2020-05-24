import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import "./PalettePopper.scss";

const useStyles = makeStyles((theme) => ({
    paper: {
        border: '1px solid',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
}));
const SimplePopper = ({
    onButtonClick,
    content
}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const setAnchor = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            <Button
                variant="contained"
                style={{fontFamily: "futura",
                        width: '18vw',
                    }}
                aria-describedby={id}
                type="button"
                onClick={(event) => {
                    setAnchor(event);
                    onButtonClick();
                }}>
                Show Palette
            </Button>
                <Popper
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    placement="bottom">
                    <div className={classes.paper}>
                        {content}
                    </div>
                </Popper>
        </div>
    );
}

export default SimplePopper;
