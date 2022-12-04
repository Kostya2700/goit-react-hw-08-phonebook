import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Phonebook</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/logu">UserMenu</NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Navigation;
