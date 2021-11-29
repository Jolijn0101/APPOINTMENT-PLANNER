import React from 'react';
import { useState, useEffect } from 'react/cjs/react.development';
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({ contacts, addcontact }) => {
  console.log(contacts);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.find((contact) => contact.name === name)) {
      alert('name already excists');
    }
    addcontact(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
  };

  useEffect(() => {
    if (contacts.find((contact) => contact.name === name)) {
      console.log('name already excists');
    }
  }, [contacts, name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
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
