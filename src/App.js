import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ContactList from './components/ContactList';

class App extends Component {
  render() {
    return (
    <ContactList>

    </ContactList>
    );
  }
}

export default App;
