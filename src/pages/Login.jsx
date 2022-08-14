import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/user.slice';

const Login = () => {

  const [ isSelected, setIsSelected ] = useState(false);

  const navigate = useNavigate('/')
  const { register, reset, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const userFormSubmit = (obj) => {
    //console.log(obj)

    axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', obj)
      .then(res => {
        localStorage.setItem('token', res.data.data.token)
        localStorage.setItem('username', `${res.data.data.user.firstName} ${res.data.data.user.lastName}`)
        dispatch(setUser(res.data.data.user))
        navigate('/')
        //console.log(res.data)
      })
      .catch(err => {
        if(err){
          alert('Invalid username and/or password')
          //console.error(err)
        }
      })
    reset({
      email: '',
      password: ''
    })
  }

  const useTestCredentials = () => {
    setIsSelected(true)
    register({
      email: 'abisai@test.com',
      password: 'test1234'
    })
  }

  return (
    <div className='login-container'>
      <div className="login-form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(userFormSubmit)}>
          <div className="login-input-container">
            <label htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id='email'
              placeholder='Your email'
              {...register('email')}
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
              {...register('password')}
            />
          </div>
          <button><h3>Login</h3></button>
        </form>
      </div>
      <div className="login-test-container">
        <p><b>Don't have an account? No worries! You can use the following credentials {':)'}</b></p>
        <div className="login-test-credentials-container">
          <p>abisai@test.com</p>
          <p>test1234</p>
          {/*<button onClick={useTestCredentials}>Use credentials</button>*/}
        </div>
      </div>
    </div>
  );
};

export default Login;