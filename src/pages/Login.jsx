import React from 'react';

const Login = () => {
  return (
    <div className='login-container'>
      <div className="login-form-container">
        <h2>Login</h2>
        <form>
          <div className="login-input-container">
            <label htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id='email'
              placeholder='Your email'
            />
          </div>
          <div className="login-input-container">
            <label htmlFor="password">
              Password
            </label>
            <input
              type="text"
              id='password'
              placeholder='Your password'
            />
          </div>
          <button><h3>Login</h3></button>
        </form>
      </div>
      <div className="login-test-container">
        <p><b>Don't have an account? No problem! You can use the following credentials {':)'}</b></p>
        <div className="login-test-credentials-container">
          <p>abisai@test.com</p>
          <p>test1234</p>
          <button>Use credentials</button>
        </div>
      </div>
    </div>
  );
};

export default Login;