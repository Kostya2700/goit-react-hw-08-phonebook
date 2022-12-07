import { logOut } from 'auth/auth-operation';
import { getUsername } from 'auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';

const UserMenu = () => {
  const name = useSelector(getUsername);
  const dispatch = useDispatch();
  return (
    <div className="userMenu">
      <p>{name}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
