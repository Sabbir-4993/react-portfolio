import React, { Component } from 'react'; 
import {Grid, Cell} from 'react-mdl';

class Education extends Component {

    render() { 
        return ( 
            <div>
                <Grid>
                    <Cell col={4}>
                        <p>{this.props.StartYear} - {this.props.EndYear}</p>
                    </Cell>
                    <Cell col={8}>
                        <h4>{this.props.MySchool}</h4>
                        <p>{this.props.SchoolDescription}</p>
                    </Cell>
                </Grid>
            </div>
         );
    }
}
 
export default Education;