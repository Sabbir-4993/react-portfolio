import React, { Component } from 'react'; 
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Ahmed</h2>
                        <img src="https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/9-256.png" 
                        alt="avater" 
                        style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book.</p>
                    </Cell>
                    
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Arvo'}}>
                                        <i className="fa fa-user-circle-o" aria-hidden="true" /> Ahmed
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Arvo'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true" /> (880) 123 456789
                                    </ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Arvo'}}>
                                        <i className="fa fa-home" aria-hidden="true" /> Dhaka Bangladesh
                                    </ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Arvo'}}>
                                        <i className="fa fa-briefcase" aria-hidden="true" /> Trimatric
                                    </ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Arvo'}}>
                                        <i className="fa fa-envelope" aria-hidden="true" /> sabbir@trimatric.com
                                    </ListItemContent>
                                </ListItem>

                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
         );
    }
}
 
export default Contact;