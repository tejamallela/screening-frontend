import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PageHeader } from './layouts/PageHeader';
import { PageAppointments } from './layouts/PageAppointments';


function App() {
  return (
    <div className="max-h-screen flex flex-col p-5">
      <PageHeader></PageHeader>
      <PageAppointments></PageAppointments>
    </div>
  );
}

export default App;
