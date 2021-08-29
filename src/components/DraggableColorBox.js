import React from 'react';
import { withStyles } from "@material-ui/core/styles";

const styles = {
    root: {
        height: "25%",
        width: "20%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.5px",
        backgroundColor: props => props.color,
    }
}

function DraggableColorBox(props) {
    const { color, classes } = props;
    return (
        <div className={classes.root}>
            {color}
            {props.name}
        </div>
    )
}

export default withStyles(styles)(DraggableColorBox);
