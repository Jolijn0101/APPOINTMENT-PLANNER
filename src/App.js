import React, { useState } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage';
import { ContactsPage } from './containers/contactsPage/ContactsPage';

function App() {
  const [contacts, setContacts] = useState([
    ['name1', 'phoneNumber1', 'email1'],
    ['name2', 'phoneNumber2', 'email2'],
    ['name3', 'phoneNumber3', 'email3'],
  ]);
  const [appointments, setAppointments] = useState([
    ['title1', 'contact1', 'date1', 'time1'],
    ['title2', 'contact2', 'date2', 'time2'],
    ['title3', 'contact3', 'date3', 'time3'],
  ]);

  const ROUTES = {
    CONTACTS: '/contacts',
    APPOINTMENTS: '/appointments',
  };

  function addcontact(name, phoneNumber, email) {
    console.log(name, phoneNumber, email);
    setContacts((prev) => [[name, phoneNumber, email], ...prev]);
  }

  function addAppointment(title, contact, date, time) {
    setAppointments((prev) => [[title, contact, date, time], ...prev]);
  }

  return (
    <>
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
            {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addcontact={addcontact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
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
