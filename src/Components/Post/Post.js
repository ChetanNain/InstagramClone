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
    }
    state = {  }
    render() { 
        return (
            <div>
                <div className='post_container'>
                    <div className='post_header'>
                        <Avatar className="post_image" src=""/>
                        <div className="post_username">Username</div>
                    </div>
                    <div>
                        <img src={postimage} width="615px"/>
                    </div>
                    <div>
                    <div style={{"marginLeft":"10px"}}>
                        <img src={love} className='post_reactimage'/>
                        <img src={comment} className='post_reactimage'/>
                        <img src={share} className='post_reactimage'/>
                    </div>
                    <div style ={{"fontWeight":"bold", "marginLeft" : "20px"}}>
                        786 Likes
                    </div>
                    </div>
                    <div>
                        <div className="post_comment">Hello Guys!</div>
                        <div className="post_comment">Hello Guys!</div>
                        <div className="post_comment">Hello Guys!</div>
                        <div className="post_comment">Hello Guys!</div>
                        <input type="text" placeholder = "Add a comment" />

                    </div>
                </div>
                <div className='post_container'>
                    <div className='post_header'>
                        <Avatar className="post_image" src=""/>
                        <div className="post_username">Username</div>
                    </div>
                    <div>
                        <img src={postimage} width="615px"/>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div className='post_container'>
                    <div className='post_header'>
                        <Avatar className="post_image" src=""/>
                        <div className="post_username">Username</div>
                    </div>
                    <div>
                        <img src={postimage} width="615px"/>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}
 
export default Post;