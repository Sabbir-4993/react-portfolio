import React, { Component } from 'react'; 
import {Grid, Cell} from 'react-mdl';

class Experience extends Component {

    render() { 
        return ( 
            <div>
                <Grid>
                    <Cell col={4}>
                        <p>{this.props.StartYear} - {this.props.EndYear}</p>
                    </Cell>
                    <Cell col={8}>
                        <h4>{this.props.JobName}</h4>
                        <p>{this.props.JobDescription}</p>
                    </Cell>
                </Grid>
            </div>
         );
    }
}
 
export default Experience;