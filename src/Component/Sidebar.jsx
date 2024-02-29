import React from "react";
import Links from "./Links"

export default function Sidebar(props){
    const links = props.posts ? props.posts.map((posts, index)=><Links title={posts.title} index={index} 
    handleClick={props.handleChangeCurrentPost}/>) : null;

    return (
        <aside>
            <ul>
                {links}
            </ul>
        </aside>
    )
}