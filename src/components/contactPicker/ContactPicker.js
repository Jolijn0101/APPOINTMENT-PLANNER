import React from 'react';

export const ContactPicker = ({ contacts, chooseContact, contact }) => {
  return (
    <>
      {contacts ? (
        <select
          name="contacts"
          id="contacts"
          onChange={chooseContact}
          value={contact}
        >
          <option>No name selected</option>

          {contacts.map((contact, index) => {
            return (
              <option key={index} value={contact[0]}>
                {contact[0]}
              </option>
            );
          })}
        </select>
      ) : (
        <p>add contacts on contacts page to use this function</p>
      )}
    </>
  );
};
