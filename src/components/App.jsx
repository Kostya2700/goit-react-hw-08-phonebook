import Phonebook from './Phonebook/Phonebook';
import css from './App.module.css';
import AppBar from './AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'auth/auth-operation';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRout';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <div className={css.elem_div}>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route
            path="/login"
            element={
              <RestrictedRoute component={Login} redirectTo={'/contacts'} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={Register} redirectTo={'/contacts'} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={Phonebook} redirectTo={'/login'} />
            }
          />

          <Route path="*" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};
