import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'Redux/selectors';
import { deleteContact } from 'Redux/actions';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}&nbsp;
          <button
            onClick={() => {
              dispatch(deleteContact(contact.id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
