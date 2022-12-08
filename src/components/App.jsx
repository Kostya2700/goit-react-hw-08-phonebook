import Phonebook from './Phonebook/Phonebook';
import css from './App.module.css';
import AppBar from './AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'auth/auth-operation';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRout';
import { selectIsRefreshing } from 'auth/auth-selectors';
import { Skeleton } from '@chakra-ui/react';

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Skeleton startColor="gray.300" endColor="orange.300" height="100vw" />
  ) : (
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
