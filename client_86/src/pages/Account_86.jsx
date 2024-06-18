import styled from 'styled-components';
import LoginForm from '../authentication/LoginForm';
import Heading from '../ui/Heading';

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;
const Account_86 = () => {
  return (
    <LoginLayout>
      <Heading as='h4'>Do you want to login other Account?</Heading>
      <LoginForm />
    </LoginLayout>
  );;
};

export default Account_86;
