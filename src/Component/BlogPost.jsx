import React, {Component} from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

export default class BlogPost extends Component{

    constructor(props){
        super(props);
        this.state = {
            post:null,
            currentPost: null
        }
        this.handleChangeCurrentPost = this.handleChangeCurrentPost.bind(this)
    }

    async getPosts(){
        const posts = await fetch('http://localhost:3002/posts');
        const res= await posts.json();
       return res;
    }
    componentDidMount(){
        this.getPosts().then(posts=> this.setState({posts, currentPost: 0}))
    }

    handleChangeCurrentPost(index){
        this.setState({currentPost: index})
    }

    render(){
        return(<>
        <Sidebar posts={this.state.posts} handleChangeCurrentPost= {this.handleChangeCurrentPost}/>
        {null != this.state.currentPost && <Content post={this.state.posts[this.state.currentPost]} />}

        </>)
    }
}