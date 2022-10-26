import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);


  const onLogin = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="form-outer-container">
      <form onSubmit={onLogin}>
        <div className="form-container">
          <div className="create_errors">
            {submitted && (errors).map((error, i) => (
              <div className="errorMessageContainer" key={i}>
                <i className="fa-solid fa-exclamation exclamation-point"></i>
                <div className="errorMessage">{error}</div>
              </div>
            ))}
          </div>
          <div>
            <label htmlFor='email' className='form-field-label'>Email</label>
            <input
              className="form-field"
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <label htmlFor='password' className='form-field-label'>Password</label>
            <input
              className="form-field"
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
            <div>
              <button type='submit' className="form-button">Sign in</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
