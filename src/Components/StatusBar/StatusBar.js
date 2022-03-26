import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import statusimg from '../../images/pp1.png'
import './StatusBar.css'

class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusList: []
        }
    }
    componentDidMount(){
        this.getData();
    }
    getData =() => {
        let data = [
            {
                "username" : "sateesh_pandey",
                "imageURL" : "../../images/pp1.png"
            },
            {
                "username" : "testing",
                "imageURL" : "../../images/pp1.png"
            },
            {
                "username" : "testing",
                "imageURL" : "../../images/pp1.png"
            },
            {
                "username" : "testing",
                "imageURL" : "../../images/pp1.png"
            },
            {
                "username" : "testing",
                "imageURL" : "../../images/pp1.png"
            },
            {
                "username" : "testing",
                "imageURL" : "../../images/pp1.png"
            },
            {
                "username" : "testing",
                "imageURL" : "../../images/pp1.png"
            },
            {
                "username" : "testing",
                "imageURL" : "../../images/pp1.png"
            },
            {
                "username" : "testing",
                "imageURL" : "../../images/pp1.png"
            }

        ]
        this.setState({statusList:data});
    }

    render() { 
        return ( <div>
                    <div className='statusbar_container'>
                        {
                            this.state.statusList.map((item,index)=>(
                                <div className='status'>
                                    <Avatar className="statusbar_status" src={statusimg}/>
                                    <div className='statusbar_text'>{item.username}</div>
                                </div>
                            ))
                        }
                    </div>
                </div> 
            );
    }
}
 
export default StatusBar;