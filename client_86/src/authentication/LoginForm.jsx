import { useState } from 'react';
import { useLogin } from './useLogin';

function LoginForm() {
  const [email, setEmail] = useState('209410686@email.com');
  const [password, setPassword] = useState('209410686');

  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    console.log('LogicForm email password ', email, password);
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  }

  return (
    <div className="ring">
      <i style={{ '--clr': '#c9c4ec' }}></i>
      <i style={{ '--clr': '#8376d9' }}></i>
      <i style={{ '--clr': '#3e28cd' }}></i>
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputBx">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div className="inputBx">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          <div className="inputBx">
            <input type="submit" value="Sign in" />
          </div>
          <div className="links">
            <a href="#">Forget Password</a>
            <a href="#">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
