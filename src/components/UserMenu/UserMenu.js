import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserEmail);

  const handleClick = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <div className={s.wrapper}>
      <p className={s.text}>Logged in as: {name}</p>
      <button type="button" onClick={handleClick} className={s.button}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
