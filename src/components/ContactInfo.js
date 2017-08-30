import React from 'react';
import contacts from './generated.json';
var contact;


function ContactInfo(props){

  return (

    <div>
      <h1>{props.id}</h1>
      <img src={contact.picture} alt="{contact.name}"/>
      <h1>{contact.name}</h1>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <p>{contact.address}</p>
    </div>
  );
}
export default ContactInfo;
