import React from "react";

function TimetableList({lesson, room, selected, all}){
    return(
        <li name={lesson}><div>
        {(lesson===selected||all===selected)&&
            `${lesson}-${room}`}
        </div></li>
    )
}


export default TimetableList;
