import React from 'react';
import contacts from './generated.json';
import ContactInfo from './ContactInfo';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

function ListItem(props) {
  return <div>
            <Link to={props.guid}>
              <img src={props.picture} alt={props.name}/>
              <h3>{props.name}</h3>
            </Link>
          </div>;
}

function ContactList(){
  return (
    <Router>
      <div>
        <ul>
          {contacts.map((contact) =>
              <ListItem key={contact.guid}
                guid={contact.guid}
                name={contact.name}
                picture={contact.picture}
                email={contact.email}
                phone={contact.phone}/>
            )}
          </ul>
        <Route path="/" component={ContactInfo}/>
      </div>
    </Router>
  );
}
export default ContactList;
