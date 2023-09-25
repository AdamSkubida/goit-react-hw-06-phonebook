import { useEffect, useRef } from 'react';
import { ContactForm } from './ContactForm/index';
import { Filter } from './Filter/index';
import { ContactList } from './ContactList/index';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts } from 'Redux/selectors';
import { setContacts } from 'Redux/actions';

export const App = () => {
  const dispatch = useDispatch();

  const isLoaded = useRef(false);

  const contacts = useSelector(getAllContacts);

  useEffect(() => {
    if (contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
      localStorage.removeItem('contacts');
    }
  }, [contacts]);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    console.log(storedContacts);

    if (storedContacts) {
      dispatch(setContacts(JSON.parse(storedContacts)));
    }

    isLoaded.current = true;

    return () => {
      isLoaded.current = false;
    };
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
