import React from 'react';
import contacts from './generated.json';
import ContactInfo from './ContactInfo';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.section`
display: flex;
border: 1px solid lightgrey;
border-radius: 7px;
width: 150px;

margin: 4px;
padding: 4px;
`;

function ListItem(props) {
  return <Card>
            <Link to={props.guid}>
              <img src={props.picture} alt={props.name}/>
              <h3>{props.name}</h3>
            </Link>
          </Card>;
}

function ContactList(){
  return (
    <Router>
      <div>
          {contacts.map((contact) =>
              <ListItem key={contact.guid}
                guid={contact.guid}
                name={contact.name}
                picture={contact.picture}
                email={contact.email}
                phone={contact.phone}/>
            )}
        <Route path="/:id" render={() => (<ContactInfo id=":id"/>)}/>
      </div>
    </Router>
  );
}
export default ContactList;
