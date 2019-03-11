import React, { Component } from 'react'; 
import { Tabs, Tab, Grid, Cell, Card, CardActions, CardText, CardTitle, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props)
        this.state ={ activeTab: 0 };
    }

    toogleCategories(){
        if(this.state.activeTab === 0){
            return(
            <div className="project-grid">
                {/* React Project #1 */}
                <Card shadow={5} style={{width: '350px', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '250px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover'}}>React Project #1</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePan</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#000'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                {/* React Project #2 */}
                <Card shadow={5} style={{width: '350px', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '250px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover'}}>React Project #2</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePan</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#000'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                {/* React Project #3 */}
                <Card shadow={5} style={{width: '350px', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '250px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover'}}>React Project #3</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePan</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#000'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                {/* React Project #4 */}
                <Card shadow={5} style={{width: '350px', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '250px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover'}}>React Project #4</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePan</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#000'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div>
                    <h1>This is Angular</h1>
                </div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div>
                    <h1>This is VueJs</h1>
                </div>
            )
        }
        else if(this.state.activeTab === 3){
            return(
                <div>
                    <h1>This is MONGOBD</h1>
                </div>
            )
        }
    }
    
    render() { 
        return ( 
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab:tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJs</Tab>
                    <Tab>MONGOBD</Tab>
                </Tabs>
                <Grid className="projects-grid">
                    <Cell col={12}>
                        <div classNames="content">
                            {this.toogleCategories()}   
                        </div>
                    </Cell>
                </Grid>
            </div>
         );
    }
}
 
export default Projects;