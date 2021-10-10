const RegisterView = () => {
  return (
    <>
      <form autoComplete="off">
        <label>
          Имя
          <input type="text" name="name" />
        </label>

        <label>
          Почта
          <input type="email" name="email" />
        </label>

        <label>
          Пароль
          <input type="password" name="password" />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </>
  );
};
export default RegisterView;
