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
    if (contacts === null) {
      addcontact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    } else if (contacts.find((contact) => contact[0] === name)) {
      alert('name already exists');
    } else {
      addcontact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  useEffect(() => {
    if (contacts === null) {
      return;
    } else {
      if (contacts.find((contact) => contact[0] === name)) {
        setNameCheck(true);
      } else if (contacts.find((contact) => contact[0] !== name)) {
        setNameCheck(false);
      }
    }
  }, [contacts, name]);

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
