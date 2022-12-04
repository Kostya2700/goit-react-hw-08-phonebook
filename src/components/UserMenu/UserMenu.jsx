import { logOut } from 'auth/auth-operation';
import { useDispatch } from 'react-redux';

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>mango@mail.com</p>
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
