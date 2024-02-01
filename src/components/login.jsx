import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Logo from './Logo';
import '../style.css'; // Asegúrate de tener el archivo style.css importado correctamente
import CrearCuentaButton from './CrearCuentaButton';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        // Lógica de autenticación
        console.log('Usuario autenticado');
        setIsAuthenticated(true);
        navigate('/inicio');
    };

    return (
        <div style={{}}>
            {/* Barra superior oscura */}
            <div style={{ maxWidth: '430px' }} className='divglobal'></div>

            {/* Fondo verde */}
            <div style={{}} className='fondoverde' />

            {/* Barra inferior oscura */}
            <div style={{}} className='barraverde'>
                {/* Texto "MyPic" en la barra inferior */}
                <div style={{ position: 'absolute', color: 'white', fontSize: '14px', fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '700', wordWrap: 'break-word', left: '50%', transform: 'translateX(-50%)', bottom: '5px', marginBottom: '10px' }}>MyPic</div>
            </div>

            {/* Formulario de inicio de sesión */}
            <Form className='login-form'>
                <Form.Group controlId="formBasicUsername">
                    <Form.Control type="text" placeholder="Usuario, correo electrónico o móvil" className='login-input' />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Contraseña" className='login-input' />
                </Form.Group>

                <Button variant="primary" type="submit" className='login-button' onClick={handleLogin}>
                    Iniciar sesión
                </Button>
            </Form>

            {/* Texto "Crear cuenta nueva" */}
            <CrearCuentaButton />
            {/* Imagen de ejemplo */}
            <Logo />
        </div>
    );
};

export default Login;
