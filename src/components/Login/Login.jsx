import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Center,
  Container,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { authOperations } from 'auth';
import { getErrorL } from 'auth/auth-selectors';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const error = useSelector(getErrorL);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      authOperations.logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <Container maxW="md">
      {error && (
        <>
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Помилка входу!</AlertTitle>
            <AlertDescription>Перевірте правильність даних.</AlertDescription>
          </Alert>
        </>
      )}
      <div>
        <Center>
          <Heading as="h3" size="lg" textAlign="center">
            Введіть дані щоб продовжити
          </Heading>
        </Center>
        <Center>
          <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
            <Input placeholder="Почта" type="email" name="email" mb={5} />

            <InputGroup size="md" mb={5}>
              <Input
                name="password"
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>

            <Center>
              <Button type="submit" colorScheme="blue">
                Увійти
              </Button>
            </Center>
          </form>
        </Center>
      </div>
    </Container>
  );
};
export default Login;
