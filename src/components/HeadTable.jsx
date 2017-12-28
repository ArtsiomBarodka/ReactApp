import React  from "react";

function HeadTable (props) {
    const {value} = props;
    return(
        <div className="Head-table-container">
            <div className="Head-table-container-item">
                <div>{value}</div>
            </div>
        </div>
    )
}

export default HeadTable;