import React,{Component} from "react";
import Post from "./Post";
import Comments from "./Comments";

export default class Content extends Component{

    constructor(props){
        super(props);
        this.state={
            comments: null
        }
    }

    async getComments(){
        const comments = await fetch(`http://localhost:3002/comments?post-id=${this.props.post.id}`)
        return await comments.json();
    }

    componentDidMount(){
        if(this.props.post){
            this.getComments().then(comments => this.setState({comments}))
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.post.id != this.post.id){
            this.getComments().then(comments=> this.setState({comments}))
        }
    }

    render(){
        return(
        <div className="container">
            <Post data={this.props.post}/>
            {null != this.state.comments && <Comments data={this.state.comments} />}
        </div>
        )
    }
}