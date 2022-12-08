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
import { getErrorR } from 'auth/auth-selectors';
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
const Register = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const error = useSelector(getErrorR);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      authOperations.register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };
  return (
    <Container maxW="md">
      <div>
        {error && (
          <>
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>Помилка реєстрації!</AlertTitle>
              <AlertDescription>Перевірте правильність даних.</AlertDescription>
            </Alert>
          </>
        )}
        <Heading as="h3" size="lg" textAlign="center">
          Введіть дані щоб зареєструватися
        </Heading>
        <Center>
          <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
            <Input
              autoComplete="off"
              placeholder="Імя"
              type="text"
              name="name"
              mb={5}
            />
            <Input
              autoComplete="off"
              placeholder="Почта"
              type="email"
              name="email"
              mb={5}
            />

            <InputGroup size="md" mb={5}>
              <Input
                autoComplete="off"
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
                Зареєструватися
              </Button>
            </Center>
          </form>
        </Center>
      </div>
    </Container>
  );
};
export default Register;
