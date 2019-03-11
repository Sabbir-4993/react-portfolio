import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './about';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Login from './Login';

const Main = () => (
    <Switch>
        <Route exact path="/landingpage" component={LandingPage} />
        <Route path="/about" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/login" component={Login} />
    </Switch>
)

export default Main;
