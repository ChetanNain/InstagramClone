import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import postimage from '../../images/post.jpg'
import love from '../../images/love.svg'
import comment from '../../images/comment.svg'
import share from '../../images/share.svg'


import './Post.css'
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList :[]
         } 
    }

    componentDidMount() {
        this.getComments();
    }

    getComments = () => {
        let data = [
            {
                "username" : "ASD",
                "commentId" : "1234",
                "timestamp" : "123456",
                "description" : "Comment 1"
            }
        ];
        this.setState({commentList : data});
    }

    render() { 
        console.log(this.props);
        return (
            <div>
                <div className='post_container'>
                    <div className='post_header'>
                        <Avatar className="post_image" src={this.props.profileImage}/>
                        <div className="post_username">{this.props.userName}</div>
                    </div>
                    <div> 
                      <img src={this.props.postImage} width="615px"/>
                    </div>
                    <div>
                    <div style={{"marginLeft":"10px"}}>
                        <img src={love} className='post_reactimage'/>
                        <img src={comment} className='post_reactimage'/>
                        <img src={share} className='post_reactimage'/>
                    </div>
                    <div style ={{"fontWeight":"bold", "marginLeft" : "20px"}}>
                        {this.props.likes} Likes
                    </div>
                    </div>
                    <div>
                        {
                            this.state.commentList.map((item,index)=>(
                                <div className="post_comment" key = {item.username + index}> {item.username} : {item.description} </div>
                            ))
                        }
                        <input type="text" className="post_commentbox" placeholder = "Add a comment" />

                    </div>
                </div>
            </div>
        );
    }
}
 
export default Post;