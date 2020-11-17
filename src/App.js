import React from 'react';
import Login from './Pages/Login';
import { componentsRegistry } from './FormComponents';
import { DynamicFormProvider } from 'use-dynamic-form';

function App() {
  return (
    <DynamicFormProvider components={componentsRegistry}>
      <div className="container">
        <div className="col-md-4 my-5 mx-auto">
          <Login/>
        </div>
      </div>
    </DynamicFormProvider>
  );
}

export default App;
