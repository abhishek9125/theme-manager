import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from "@material-ui/core/styles";
import { Delete } from '@material-ui/icons';
import styles from '../styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement((props) => {
    const { name, classes, handleDeleteClick } = props;
    return (
        <div className={classes.root}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <Delete className={classes.deleteIcon} onClick={handleDeleteClick} />
            </div>
        </div>
    )
})

export default withStyles(styles)(DraggableColorBox);
