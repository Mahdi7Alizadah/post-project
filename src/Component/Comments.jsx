import React from "react";
import Commenet from "./Comment"

export default function Commenets(props){

    const comments= props.data ? props.data.map(comment=><Commenet comment={comment.body}/>) : null;
    return(
        <div className="comments">
                <p>Comments:</p>
                {comments}
        </div>

    )
}