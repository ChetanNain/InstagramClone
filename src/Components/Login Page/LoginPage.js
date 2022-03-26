import React, {Component} from 'react';
import './LoginPage.css';

import Grid from '@mui/material/Grid';
import inst_image from '../../images/9364675fb26a.svg';
import insta_logo from '../../images/logoinsta.png'
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin : true
        }
    }
    changeLogin = () =>{
        if(this.state.isLogin==true){
            this.setState({isLogin : false});
        }
        else{
            this.setState({isLogin : true});
        }
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <Grid container spacing>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={8}> 
                        <div className='loginpage_main'>
                            <div>
                                <img src={inst_image} width="454px"/>
                            </div>
                            <div>
                                <div className='loginpage_rightcomponent'>
                                    <img className='loginpage_logo' src={insta_logo}/>
                                    <div className='loginpage_signin'>
                                        {
                                            this.state.isLogin ? <SignIn/> : <SignUp/>
                                        }
                                        <div className='login_ordiv'>
                                            <div className='login_divider'></div>
                                            <div className='login_or'>OR</div>
                                            <div className='login_divider'></div>
                                        </div>

                                        <div className='login_fb'> <img src={fb} width="15px" height="15px"/> Log in with Facebook </div>

                                        <div className='login_forgot'> Forgot password? </div>

                                    </div>
                                </div>
                                <div class="loginpage_signupoption">
                                    {
                                        this.state.isLogin ? 
                                        <div>Don't have an account? <span onClick={this.changeLogin} style={{"fontWeight":"bold", "color":"#0395F6"}}>Sign up</span></div>
                                        :
                                        <div>Have an account? <span onClick={this.changeLogin} style={{"fontWeight":"bold", "color":"#0395F6"}}>Sign in</span></div>
                                    }



 
                                </div>
                                <div className="loginPage_downloadSection">
                                    <div >
                                        Get the app.
                                    </div>
                                    <div className="loginPage_option">
                                        <img className="loginPage_dwing" src={appstore} width="136px"/>
                                        <img className="loginPage_dwing" src={playstore} width="136px"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </div>

         );
    }
}
 
export default LoginPage;