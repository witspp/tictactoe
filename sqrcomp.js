
   
import React from "react";

const SqComponent = (props) => {
    const classes = (props.className ? `${props.className} square` : `square`)
    return (
        <span
            className={classes + (props.state === "X" ? ` X` : ` o`)}
            onClick={() => props.onClick(props.index)}>

           {props.state}
           
        </span>
    )
}
export default SqComponent;