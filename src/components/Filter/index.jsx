import css from './Filter.module.css';

export const Filter = ({ onFilter }) => {
  const handleFilterChange = e => {
    onFilter(e.target.value);
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
        onChange={handleFilterChange}
      ></input>
    </div>
  );
};
