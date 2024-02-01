import React from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import logo from './MyPic.png';
import './style.css'; // Asegúrate de tener el archivo style.css importado correctamente
import Login from './components/login';
import MobileNumber from './components/EmailView';
import Navbar from './components/Navbar';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import ConfirmEmail from './components/ConfirmEmail';
import ChoosePassword from './components/ChoosePassword';
import Registro from './components/Registro';
import EmailView from './components/EmailView';
import { Router } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Inicio from './components/Inicio';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/register" element={<Registro />} />
      <Route path="/inicio" element={<Layout />} />

    </Routes>
  );
}

export default App;
