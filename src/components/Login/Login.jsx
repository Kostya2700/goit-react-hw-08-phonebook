import {
  Button,
  Center,
  Container,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { authOperations } from 'auth';
import { useState } from 'react';
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
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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
      <div>
        <Heading as="h3" size="lg" ml={25}>
          Введіть дані щоб продовжити
        </Heading>

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
      </div>
    </Container>
  );
};
export default Login;
