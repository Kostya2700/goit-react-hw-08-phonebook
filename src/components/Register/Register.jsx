import { authOperations } from 'auth';
import { useDispatch } from 'react-redux';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};
const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      authOperations.register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };
  return (
    <div>
      <h1>Введіть дані щоб зареєструватися</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Імя
          <input type="text" name="name" />
        </label>

        <label autoComplete="off" style={styles.label}>
          Почта
          <input type="email" name="email" />
        </label>

        <label autoComplete="off" style={styles.label}>
          Пароль
          <input type="password" name="password" />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};
export default Login;
