/* Start Importing the Components we use */
import './App.css';
import React, { Component } from 'react';
import Header from './Components/header';
import Content from './Components/content';
import Footer from './Components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
/* Stop Importing the Components we use */

class App extends Component {
  render() {/*Component Render Method To display content*/
    return (
      <Router>{/* Client Side Routing */}
        <div className="App">
          <Navbar bg="dark" variant="dark">{/* Navbar */}
            <Container>
              <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                {/* Nav Links to each Component and the paths */}
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/header">Header</Nav.Link>
                <Nav.Link href="/footer">Footer</Nav.Link>
              </Nav>
            </Container>
          </Navbar>{/* Close Navbar */}

          <Switch>{/* Switch Statement for CSR */}
          {/* Set up route paths to each component */}
            <Route path="/" component={Content} exact></Route>
            <Route path="/header" component={Header}></Route>
            <Route path="/footer" component={Footer}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;/* Export the App.js File */
