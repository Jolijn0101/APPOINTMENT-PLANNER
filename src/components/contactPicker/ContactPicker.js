import React from 'react';
// This component let you choose between the already made contacts
export const ContactPicker = ({ contacts, chooseContact, contact }) => {
  return (
    <>
      {/* an ternary operator to display text if there is no contact */}
      {contacts ? (
        <select
          name="contacts"
          id="contacts"
          onChange={chooseContact}
          value={contact}
        >
          {/* This is the default */}
          <option>No name selected</option>

          {/* maps over the contacts array and displays only the name */}
          {contacts.map((contact, index) => {
            return (
              <option key={index} value={contact[0]}>
                {contact[0]}
              </option>
            );
          })}
        </select>
      ) : (
        <p>make contacts on contacts page to add in your appointments</p>
      )}
    </>
  );
};
