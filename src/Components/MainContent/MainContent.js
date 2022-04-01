import './MainContent.css'

import React, { Component } from 'react';
import { Grid } from '@mui/material';
import StatusBar from '../StatusBar/StatusBar'
import MainPage from '../MainPage/MainPage'
import InfoSection from '../InfoSection/InfoSection';
import Suggestions from '../Suggestions/Suggestions';

class MainContent extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <Grid container>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={6}>
                        <StatusBar/>
                        <MainPage/>
                    </Grid>
                    <Grid item xs={2}>
                        <InfoSection/>
                        <Suggestions/>
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
            </div>
         );
    }
}
 
export default MainContent;