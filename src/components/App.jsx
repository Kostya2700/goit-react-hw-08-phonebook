import Phonebook from './Phonebook/Phonebook';
import css from './App.module.css';
import Navigation from './Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Autorization from './Autorization/Autorization';
import UserMenu from './UserMenu/UserMenu';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'auth/auth-operation';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <div className={css.elem_div}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Phonebook />} />
          <Route path="/register" element={<Login />} />
          <Route path="/login" element={<Autorization />} />
          <Route path="/logu" element={<UserMenu />} />

          <Route path="*" element={<Phonebook />} />
        </Route>
      </Routes>
    </div>
  );
};
