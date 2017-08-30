import React from 'react';
import contacts from './generated.json';

function ListItem(props) {
  return <div>
            <img src={props.picture} alt="picture of {props.name}"/>
            <h1>{props.name}</h1>
            <p>{props.email}</p>
            <p>{props.phone}</p>
            <p>{props.address}</p>
          </div>;
}

function ContactList(){
  return (
    <div>
      <ul>
        {contacts.map((contact) =>
              <ListItem key={contact.guid}
                name={contact.name}
                picture={contact.picture}
                email={contact.email}
                phone={contact.phone}/>
            )}
        <li></li>
      </ul>
    </div>
  );
}
export default ContactList;
