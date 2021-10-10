import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/filter/filter-actions';
import s from './Search.module.css';
import { getFilter } from '../../redux/contacts/contacts-selectors';

function Search() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Find contacts by name:
      <input
        type="text"
        value={filter}
        onChange={event => dispatch(filterContacts(event.target.value))}
        className={s.input}
      ></input>
    </label>
  );
}

export default Search;
