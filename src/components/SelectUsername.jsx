import React, { useState } from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import '../style.css';  // Asegúrate de reemplazar con el nombre correcto de tu archivo CSS
import Logo from './Logo';
import CrearCuentaButton from './CrearCuentaButton';

const SelectUsername = ({ onSubmit }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
        // Llamada a la función onSubmit con el nombre de usuario
        onSubmit(username);
    };

    return (
        <>
            <Logo></Logo>
            <div>
                {/* Barra superior oscura */}
                <div style={{ maxWidth: '430px' }} className='divglobal'></div>

                {/* Fondo verde */}
                <div style={{}} className='fondoverde' />

                {/* Barra inferior oscura */}
                <div style={{}} className='barraverde'>
                    {/* Texto "MyPic" en la barra inferior */}
                    <div style={{ position: 'absolute', color: 'white', fontSize: '14px', fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '700', wordWrap: 'break-word', left: '50%', transform: 'translateX(-50%)', bottom: '5px', marginBottom: '10px' }}>MyPic</div>
                </div>

                {/* Texto adicional encima del formulario */}
                <div style={{ left: '50%', transform: 'translateX(-50%)', top: '350px', position: 'absolute', color: 'white', fontSize: '18px', fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
                    <p>Elige tu nombre de usuario</p>
                    {/* <p className='additionaltext'>Su correo electrónico no sera compartido con terceras personas</p> */}
                </div>

                {/* Formulario de inicio de sesión */}
                <Form className="login-form" onSubmit={handleSubmit}>
                    <Form.Control
                        type="text"
                        placeholder="Introduce tu usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Button variant="primary" type="submit">
                        Siguiente
                    </Button>
                </Form>


                {/* Texto "Crear cuenta nueva" */}
            </div>
        </>

    );
}

export default SelectUsername