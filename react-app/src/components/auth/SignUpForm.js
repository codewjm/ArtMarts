import React, { useState, useEffect } from 'react';
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

  const emailRegX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  useEffect(() => {
    let errors = [];

    if (first_name.length < 2 || first_name.length > 50) {
      errors.push("first name: must be between 2 and 50 characters.")
    }
    if (last_name.length < 2 || last_name.length > 50) {
      errors.push("last name: must be between 2 and 50 characters.")
    }
    if (username.length < 2 || username.length > 50) {
      errors.push("username: must be between 2 and 50 characters.")
    }
    if (!email.match(emailRegX)) {
      errors.push("email: must be valid email address ( example@ex.com ).")
    }
    if (email.length < 2 || email.length > 50) {
      errors.push("email: must be between 2 and 50 characters.")
    }
    if (password.length < 6 || password.length > 50) {
      errors.push('password: must be between 6 and 50 characters.');
    }
    if (password !== repeatPassword) {
      errors.push('password: passwords must match.');
    }

    setErrors(errors);
  }, [first_name, last_name, email, username, password, repeatPassword]);

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
