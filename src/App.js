import React, { useState } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage';
import { ContactsPage } from './containers/contactsPage/ContactsPage';

function App() {
  const [contacts, setContacts] = useState(
    null
    /* made for testing[
    ['name1', 'phoneNumber1', 'email1'],
    ['name2', 'phoneNumber2', 'email2'],
    ['name3', 'phoneNumber3', 'email3'],
  ]*/
  );
  const [appointments, setAppointments] = useState(
    null
    /* made for testing[
    ['title1', 'contact1', 'date1', 'time1'],
    ['title2', 'contact2', 'date2', 'time2'],
    ['title3', 'contact3', 'date3', 'time3'],
  ]*/
  );

  const ROUTES = {
    CONTACTS: '/contacts',
    APPOINTMENTS: '/appointments',
  };
  //makes new contact array and updates contact state
  function addcontact(name, phoneNumber, email) {
    if (contacts === null) {
      setContacts([[name, phoneNumber, email]]);
    } else {
      setContacts((prev) => [[name, phoneNumber, email], ...prev]);
    }
  }
  //makes new appointment array and update appointment state
  function addAppointment(title, contact, date, time) {
    if (appointments === null) {
      setAppointments([[title, contact, date, time]]);
    } else {
      setAppointments((prev) => [[title, contact, date, time], ...prev]);
    }
  }

  return (
    <>
      {/* navigates between the components */}
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* renders contactpage component */}
            <ContactsPage contacts={contacts} addcontact={addcontact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* renders appointmentsPage */}
            <AppointmentsPage
              appointments={appointments}
              contacts={contacts}
              addAppointment={addAppointment}
              array={appointments}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
