import { getIsLoggedIn } from 'auth/auth-selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

const AppBar = () => {
  const isConnect = useSelector(getIsLoggedIn);
  return (
    <div>
      <nav>
        {!isConnect ? (
          <div className="appDiv">
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </div>
        ) : (
          <div className="appDivUser">
            <NavLink to="/contacts">Phonebook</NavLink>
            <UserMenu />
          </div>
        )}
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default AppBar;
