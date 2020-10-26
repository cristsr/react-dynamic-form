import React from 'react';
import Form from '../../Form';
import { loginForm } from './loginForm';

const Login = () => {
  // const formConfig = loginForm();

  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Login</h4>
      </div>
      <div className="card-body">
        <Form config={loginForm}/>
      </div>
    </div>
  );
};

export default Login;