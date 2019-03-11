import React, { Component } from 'react'; 
import { Grid , Cell } from 'react-mdl';


class LandingPage extends Component {
    
    render() { 
        return ( 
            <div style={{ width: '100%', margin:'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src="https://www.shareicon.net/data/256x256/2015/09/18/642819_administrator_512x512.png" alt="avatar" className="avatar-img"
                         />
                         <div className="banner-text">
                            <h1>React Testing</h1>

                            <hr />
                            <p>HTML | CSS | PHP | REACT | WORDPRESS | MONGOBD</p>
                            <div className="social-link">
                                {/* google */}
                                <a href="google.com" target="_blank">
                                    <i className="fa fa-facebook-official" aria-hidden="true"/>
                                </a>
                                {/* github */}
                                <a href="github.com" target="_blank">
                                    <i className="fa fa-github" aria-hidden="true"/>
                                </a>
                                {/* youtube */}
                                <a href="youtube.com" target="_blank">
                                    <i className="fa fa-youtube-play" aria-hidden="true"/>
                                </a>
                                {/* google */}
                                <a href="google.com" target="_blank">
                                    <i className="fa fa-google" aria-hidden="true"/>
                                </a>
                            </div>
                         </div>
                    </Cell>
                </Grid>
            </div>
         );
    }
}
 
export default LandingPage;