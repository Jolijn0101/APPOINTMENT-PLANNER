import React from 'react';
import { useState, useEffect } from 'react/cjs/react.development';
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({ contacts, addcontact }) => {
  const [nameCheck, setNameCheck] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //checks if there are any contacts and calls a function to make a new contact
    if (contacts === null) {
      addcontact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
      // if there are any contacts check if theres a duplicate
    } else if (contacts.find((contact) => contact[0] === name)) {
      alert('name already exists');
      // calls a function to add a new contact
    } else {
      addcontact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  useEffect(() => {
    //Checks if there are any contacts
    if (contacts === null) {
      return;
      //Checks if there is a duplicate sets namecheck to true to display a message
    } else {
      if (contacts.find((contact) => contact[0] === name)) {
        setNameCheck(true);
        //Sets the Namecheck back to false when the name is changed
      } else if (contacts.find((contact) => contact[0] !== name)) {
        setNameCheck(false);
      }
    }
  }, [contacts, name]);
  //returns the contactform and tilelist component
  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          nameCheck={nameCheck}
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
