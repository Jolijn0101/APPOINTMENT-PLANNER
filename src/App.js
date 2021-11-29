import React, { useState } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage';
import { ContactsPage } from './containers/contactsPage/ContactsPage';

function App() {
  const [contacts, setContacts] = useState([
    { Name: 'name1', PhoneNumber: 'phoneNumber1', Email: 'email1' },
    { Name: 'name2', PhoneNumber: 'phoneNumber2', Email: 'email2' },
    { Name: 'name3', PhoneNumber: 'phoneNumber3', Email: 'email3' },
  ]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: '/contacts',
    APPOINTMENTS: '/appointments',
  };

  function addcontact(name, phoneNumber, email) {
    setContacts((prev) => [
      { Name: name, PhoneNumber: phoneNumber, Email: email },
      ...prev,
    ]);
  }

  function addAppointment(title, contact, date, time) {
    setAppointments((prev) => [
      { Title: title, Contact: contact, Date: date, Time: time },
      ...prev,
    ]);
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
              addAppointment={addAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
