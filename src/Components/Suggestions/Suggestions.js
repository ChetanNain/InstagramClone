import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import './Suggestions.css'

class Suggestions extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="suggestions_container">
                    <div className="suggestions_header">
                        <div>Suggestions For You</div>
                    </div>
                    <div className="suggestions_body">
                        <div className="suggestions_friends">
                            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Ellie_Goulding_March_18%2C_2014_%28cropped%29.jpg" className="suggestions_image"/>
                            <div className="suggestions_username">Friend 1</div>
                        </div>
                        <div className="suggestions_friends">
                            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Ellie_Goulding_March_18%2C_2014_%28cropped%29.jpg" className="suggestions_image"/>
                            <div className="suggestions_username">Friend 1</div>
                        </div>
                        <div className="suggestions_friends">
                            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Ellie_Goulding_March_18%2C_2014_%28cropped%29.jpg" className="suggestions_image"/>
                            <div className="suggestions_username">Friend 1</div>
                        </div>
                        <div className="suggestions_friends">
                            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Ellie_Goulding_March_18%2C_2014_%28cropped%29.jpg" className="suggestions_image"/>
                            <div className="suggestions_username">Friend 1</div>
                        </div>
                        <div className="suggestions_friends">
                            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Ellie_Goulding_March_18%2C_2014_%28cropped%29.jpg" className="suggestions_image"/>
                            <div className="suggestions_username">Friend 1</div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
export default Suggestions;