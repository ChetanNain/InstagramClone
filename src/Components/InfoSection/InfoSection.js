import React, { Component } from 'react';
import { Avatar } from '@mui/material';
import './InfoSection.css'

class InfoSection extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <div className='info_container'>
                    <Avatar className="info_image" src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Ellie_Goulding_March_18%2C_2014_%28cropped%29.jpg"/>
                    <div className="info_content">
                        <div className="info_username"> Ellie Goulding</div>
                        <div className="info_description">Description</div>
                    </div>
                </div>
            </div>
         );
    }
}
export default InfoSection;
<div>

</div>