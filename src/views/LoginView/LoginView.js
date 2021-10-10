const LoginView = () => {
  return (
    <form autoComplete="off">
      <label>
        Почта
        <input type="email" name="email" />
      </label>

      <label>
        Пароль
        <input type="password" name="password" />
      </label>

      <button type="submit">Войти</button>
    </form>
  );
};
export default LoginView;
