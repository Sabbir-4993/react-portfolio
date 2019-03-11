import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Time from './components/Time';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title="Portfolio" scroll>
                  <Navigation>
                      <Link to="/landingpage">Home</Link>
                      <Link to="/about">About Me</Link>
                      <Link to="/projects">Project</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/contact">Contact</Link>
                      <Link to="/login">Login</Link>
                      <Time />
                  </Navigation>
              </Header>

              <Drawer title="Portfolio">
                <Navigation>
                    <Link to="/about">About Me</Link>
                    <Link to="/projects">Project</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login">Login</Link>
                </Navigation>
              </Drawer>

              <Content>
                  <div className="page-content" />
                  <Main />
              </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
