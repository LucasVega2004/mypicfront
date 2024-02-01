import React, { useState } from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import '../style.css';  // Asegúrate de reemplazar con el nombre correcto de tu archivo CSS
import Logo from './Logo';
import CrearCuentaButton from './CrearCuentaButton';

const EmailView = ({ onSubmit }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar que el número de teléfono tenga 9 caracteres numéricos
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (isEmailValid) {
            // Llamar a onSubmit solo si el número es válido
            onSubmit(email);
        } else {
            // Mostrar mensaje de error o realizar alguna acción adecuada si la validación falla
            console.error('El número de teléfono debe tener 9 caracteres numéricos.');
            // Puedes agregar lógica adicional aquí, como mostrar un mensaje de error al usuario
        }
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
                    <p>¿Cual es tu correo electrónico?</p>
                    <p className='additionaltext'>Su correo electrónico no sera compartido con terceras personas</p>
                </div>

                {/* Formulario de inicio de sesión */}
                <Form className="login-form" onSubmit={handleSubmit}>
                    <Form.Control
                        type="email"
                        placeholder="Introduce tu correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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

export default EmailView;
