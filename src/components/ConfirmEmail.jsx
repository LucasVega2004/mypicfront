import React, { useState } from 'react'
import { Button, Form, Image } from 'react-bootstrap';
import Logo from './Logo';
import CrearCuentaButton from './CrearCuentaButton';

const ConfirmEmail = ({ onSubmit }) => {
    const [confirmCode, setConfirmCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(confirmCode);
    };
    return (
        <>
            <Logo></Logo>
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

                {/* Texto adicional encima del formulario */}
                <div style={{ left: '50%', transform: 'translateX(-50%)', top: '350px', position: 'absolute', color: 'white', fontSize: '18px', fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
                    <p>Introduce el código de confirmación</p>
                    <p className='additionaltext'>Para confirmar tu cuenta, introduce el código de 6
                        dígitos que hemos enviado a tu número de teléfono</p>
                </div>

                {/* Formulario de inicio de sesión */}
                <Form className="login-form" onSubmit={handleSubmit}>
                    <Form.Control
                        type="text"
                        placeholder="Código de confirmación"
                        value={confirmCode}
                        onChange={(e) => setConfirmCode(e.target.value)}
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

export default ConfirmEmail