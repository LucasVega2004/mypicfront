import React from 'react'
import { Button, Form, Image } from 'react-bootstrap';
import Logo from './Logo';
const ChoosePassword = () => {
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
                    <p>Crea una contraseña</p>
                    <p className='additionaltext'>Crea una contraseña que tenga al menos seis letras o números. Debe ser difícil de adivinar.</p>
                </div>

                {/* Formulario de inicio de sesión */}
                <Form className="login-form">
                    <Form.Control type="text" placeholder="Contraseña" />
                    <Button variant="primary" type="submit">
                        Siguiente
                    </Button>
                </Form>

                {/* Texto "Crear cuenta nueva" */}
                <div style={{ left: '50%', transform: 'translateX(-50%)', top: '836px', position: 'absolute', color: 'white', fontSize: '14px', fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Crear cuenta nueva</div>
            </div>
        </>

    );
}

export default ChoosePassword