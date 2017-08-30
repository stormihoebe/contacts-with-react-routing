import React from 'react';
import contacts from './generated.json';


function ContactInfo(props){
  return (
    <div>
      <img src={props.picture} alt="picture of {props.name}"/>
      <h1>{props.name}</h1>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <p>{props.address}</p>
    </div>
  );
}
export default ContactInfo;