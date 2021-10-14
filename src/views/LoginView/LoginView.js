import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthNav from '../../components/AuthNav/AuthNav';
import authOperations from '../../redux/auth/auth-operations';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import s from './LoginView.module.css';

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(getIsLoggedIn);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    reset();
  };

  return (
    <div className="viewWrapper">
      {!isLoggedIn && <AuthNav />}
      <form autoComplete="off" onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={s.input}
          />
        </label>

        <label className={`${s.label} ${s.mb}`}>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={s.input}
          />
        </label>

        <button type="submit" className={s.button}>
          Sign In
        </button>
      </form>
    </div>
  );
};
export default LoginView;
