import React, { Component } from 'react'; 
import {Grid, Cell} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skill from './Skill';


class Resume extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <div style={{textAlign:'center'}}>
                            <img alt="man" src="https://www.shareicon.net/data/256x256/2017/03/14/881194_users_512x512.png" />
                        </div>
                        <h2>Ahmed</h2>
                        <h4>Designer</h4>
                        <hr />
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting 
                            industry. Lorem Ipsum has been the industry's standard dummy text 
                            ever since the 1500s, when an unknown printer took a galley of type 
                            and scrambled it to make a type specimen book. when an unknown 
                            printer took a galley of type and scrambled it to make a type specimen 
                            book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged
                        </p>
                        <hr />
                        <h5>Address</h5>
                        <p>Dhaka, Bangladesh</p>
                        <h5>Email</h5>
                        <p>sabbir@trimatric.com</p>
                        <h5>Web</h5>
                        <p>www.trimatric.com</p>
                        <hr />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        
                        <Education
                            StartYear={2012}
                            EndYear={2014}
                            MySchool="CPSCR"
                            SchoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                            unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised in the 1960s with the release of 
                            Letraset sheets containing Lorem Ipsum passages"
                         />

                        <Education
                            StartYear={2014}
                            EndYear={2018}
                            MySchool="Daffodil International University"
                            SchoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                            unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised in the 1960s with the release of 
                            Letraset sheets containing Lorem Ipsum passages"
                         />
                        <hr />

                        <h2>Experience</h2>
                        <Experience
                            StartYear={2019}
                            EndYear="Running"
                            JobName="Trimatric"
                            JobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                            unknown printer took a galley of type and scrambled it to make a type specimen book."
                         />

                        <Experience
                            StartYear={2019}
                            EndYear="Running"
                            JobName="Trimatric"
                            JobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                            unknown printer took a galley of type and scrambled it to make a type specimen book."
                         />
                        <hr />

                        <h2>Skill</h2>
                        <Skill
                            skill="AAA"
                            progress={75}
                            buffer={25}
                        />

                        <Skill
                            skill="BBB"
                            progress={55}
                            buffer={45}
                        />

                        <Skill
                            skill="CCC"
                            progress={65}
                            buffer={35}
                        />
                        
                    </Cell>
                </Grid>
            </div>
         );
    }
}
 
export default Resume;