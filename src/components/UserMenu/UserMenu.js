import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  const handleClick = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <>
      <p>Вы вошли как {name}</p>
      <button type="button" onClick={handleClick}>
        Выйти
      </button>
    </>
  );
};

export default UserMenu;
