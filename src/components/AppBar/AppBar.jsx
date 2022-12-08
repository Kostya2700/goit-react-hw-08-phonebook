import { Center, Spinner, Text } from '@chakra-ui/react';
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
            <NavLink to="/register">
              <Text
                as="b"
                fontSize="20px"
                border="1px"
                borderColor="gray.200"
                padding={3}
              >
                Register
              </Text>
            </NavLink>
            <NavLink to="/login">
              <Text
                as="b"
                fontSize="20px"
                border="1px"
                borderColor="gray.200"
                padding={3}
              >
                Login
              </Text>
            </NavLink>
          </div>
        ) : (
          <div className="appDivUser">
            <NavLink to="/contacts">
              <Text
                as="b"
                fontSize="20px"
                border="1px"
                borderColor="gray.200"
                padding={3}
              >
                Phonebook
              </Text>
            </NavLink>
            <UserMenu />
          </div>
        )}
      </nav>
      <Suspense
        fallback={
          <Center>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Center>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
export default AppBar;
