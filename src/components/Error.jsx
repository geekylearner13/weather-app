import React from "react";

function Error (props){
    return(
        <div className="err-box">
            <h3>{props.msg}</h3>
        </div>
    )
}
export default Error