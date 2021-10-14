import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthNav from '../../components/AuthNav/AuthNav';
import authOperations from '../../redux/auth/auth-operations';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import s from './RegisterView.module.css';

const RegisterView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    reset();
  };

  return (
    <div className="viewWrapper">
      {!isLoggedIn && <AuthNav />}
      <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
        <label className={s.label}>
          Name:
          <input
            type="text"
            name="name"
            className={s.input}
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            className={s.input}
            onChange={handleChange}
          />
        </label>

        <label className={`${s.label} ${s.mb}`}>
          Password:
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={s.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default RegisterView;
