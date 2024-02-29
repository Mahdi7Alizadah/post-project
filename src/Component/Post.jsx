import React from "react";

export default function Post(props){
    return(
        
            <div className="post">
                <img src="" alt="" />
                <h1>{props.data.title}</h1>
                <p>{props.data.body}</p>
            </div>

    )
}