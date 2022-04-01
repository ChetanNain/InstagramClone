import React, { Component } from 'react';
import './MainPage.css'
import Post from '../Post/Post';
import uploadImage from '../../images/upload.png'

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            postArray : []
        }
    }

    componentDidMount(){
        this.getPost();
    }

    getPost=()=>{
        let data = [
            {
                "postId" : "12345",
                "userName" : "abcdef",
                "postImageURL" : "https://upload.wikimedia.org/wikipedia/commons/f/f7/Ellie_Goulding_March_18%2C_2014_%28cropped%29.jpg",
                "timeStamp" : "12345",
                "likes" : "1234"
            },
            {
                "postId" : "12345",
                "userName" : "abcdef",
                "postImageURL" : "https://upload.wikimedia.org/wikipedia/commons/f/f7/Ellie_Goulding_March_18%2C_2014_%28cropped%29.jpg",
                "timeStamp" : "12345",
                "likes" : "1234"
            },
            {
                "postId" : "12345",
                "userName" : "abcdef",
                "postImageURL" : "https://upload.wikimedia.org/wikipedia/commons/f/f7/Ellie_Goulding_March_18%2C_2014_%28cropped%29.jpg",
                "timeStamp" : "12345",
                "likes" : "1234"
            }
        ];
        this.setState({postArray : data});
    }
    render() { 

        {
            console.log("Hello")
            console.log(this.state.postArray)
        }
        return ( 
                <div>
                    <div style={{"textAlign":"center", "margin":"10px"}}>
                        <img className='mainpage_uploadicon' src={uploadImage}/>                        
                    </div>
                    {

                        this.state.postArray.map((item,index) =>
                            <Post key={item.postId} id={item.postId} userName={item.userName} postImage={item.postImageURL} likes={item.likes}/>
                        )
                    }
                </div> 
                );
    }
}
export default MainPage;