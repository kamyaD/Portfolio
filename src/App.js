import React, { Component } from "react";
import PageWrapper from "./components/PageWrapper";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Pages
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import AdminWrapper from "./components/AdminWrapper";
import Login from "./components/Pages/Login";

class App extends Component {
  render() {
    return (
      <Router>
          <AdminWrapper>
          <Route path="/admin" render={props => (<Login />)} />
          </AdminWrapper>
          <Route exact path="/" render={props => (
          <PageWrapper>
          <Home {...props}/>
          </PageWrapper>
          )}
          />
          <Route path="/about" render={props => (
            <PageWrapper>
            <About {...props}/>
            </PageWrapper>
            )} 
            />
          <Route path="/services" render={props => (
          <PageWrapper>
            <Home {...props}/>
            </PageWrapper>
            )} 
            />
          <Route path="/contact" render={props => (
            <PageWrapper>
            <Contact {...props}/>
            </PageWrapper>
            )} 
            />
      </Router>
    );
  }
}

export default App;
