import React from 'react';
import { loginForm } from './loginForm';
import { useDynamicForm } from 'use-dynamic-form';

const Login = () => {
  const {form, methods} = useDynamicForm({
    config: loginForm,
    mode: 'onChange'
  });

  console.log(form)
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Login</h4>
        </div>
        <div className="card-body">
          <div style={{marginBottom: '20px'}}>
            {form}
            <input type="button" value='ENVIAR' onClick={methods.handleSubmit((d) => console.log(d))}/>
            <form>

            </form>

          </div>

          <input type="button" value='RESET' onClick={() => methods.reset()}/>
        </div>
      </div>
    </>
  );
};
export default Login;