import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/index';
import { Filter } from './Filter/index';
import { ContactList } from './ContactList/index';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = (newContact, newNumber) => {
    const exist = contacts.find(contact => contact.name === newContact);

    if (!exist) {
      const newContactPerson = {
        name: newContact,
        number: newNumber,
        id: nanoid(),
      };

      setContacts([...contacts, newContactPerson]);
      Notify.success(`Contact was added!`);
    } else {
      Notify.failure(`Contact exist`);
    }
  };

  const addFilter = newFilter => {
    setFilter(newFilter);
  };

  const deleteContact = id => {
    const contact = contacts.find(contact => id === contact.id);
    if (contact) {
      Notify.failure(`${contact.name} has been deleted`);
      setContacts(contacts.filter(contact => id !== contact.id));
    }
  };

  useEffect(() => {
    if ('contacts' in localStorage) {
      const storedContacts = localStorage.getItem('contacts');
      console.log(storedContacts);

      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <ContactForm
        onAdd={(name, number) => {
          addContact(name, number);
        }}
      />
      <Filter onFilter={filter => addFilter(filter)} />
      <ContactList
        contactItems={contacts}
        filter={filter}
        deleteItem={id => deleteContact(id)}
      />
    </div>
  );
};
