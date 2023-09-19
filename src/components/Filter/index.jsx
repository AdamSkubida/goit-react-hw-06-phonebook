import { useDispatch } from 'react-redux';
import { filterContact } from 'Redux/actions';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <div className={css[`label-input`]}>
      <label className={css.label} htmlFor="filter">
        Find contact by name
      </label>
      <input
        type="text"
        name="filter"
        placeholder="Find contact..."
        onChange={handleFilter}
      ></input>
    </div>
  );
};
