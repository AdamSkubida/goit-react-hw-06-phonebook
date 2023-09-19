import css from './ContactList.module.css';

export const ContactList = ({ contactItems, filter, deleteItem }) => {
  return (
    <ul className={css.contactList}>
      {contactItems
        .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        .map(item => (
          <li key={item.id}>
            {item.name} --- {item.number}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
    </ul>
  );
};
