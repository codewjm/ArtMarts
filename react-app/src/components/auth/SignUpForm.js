import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [first_name, setFirst_Name] = useState('');
  const [last_name, setLast_Name] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);


  const onSignUp = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (password === repeatPassword) {
      const data = await dispatch(signUp(first_name, last_name, email, username, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateFirstname = (e) => {
    setFirst_Name(e.target.value);
  };

  const updateLastname = (e) => {
    setLast_Name(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="form-outer-container">
      <form onSubmit={onSignUp}>
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
            <label className='form-field-label'>First Name</label>
            <input
              className="form-field"
              type='text'
              name='first_name'
              onChange={updateFirstname}
              value={first_name}
              required
            ></input>
          </div>
          <div>
            <label className='form-field-label'>Last Name</label>
            <input
              className="form-field"
              type='text'
              name='last_name'
              onChange={updateLastname}
              value={last_name}
              required
            ></input>
          </div>
          <div>
            <label className='form-field-label'>User Name</label>
            <input
              className="form-field"
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <label className='form-field-label'>Email</label>
            <input
              className="form-field"
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <label className='form-field-label'>Password</label>
            <input
              className="form-field"
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <label className='form-field-label'>Repeat Password</label>
            <input
              className="form-field"
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required
            ></input>
          </div>
          <button type='submit' className="form-button">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
