import { useEffect } from 'react';
import { ContactForm } from './ContactForm/index';
import { Filter } from './Filter/index';
import { ContactList } from './ContactList/index';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts } from 'Redux/selectors';
import { setContacts } from 'Redux/actions';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    console.log(storedContacts);

    if (storedContacts) {
      dispatch(setContacts(JSON.parse(storedContacts)));
    }
  }, [dispatch]);

  const contacts = useSelector(getAllContacts);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
