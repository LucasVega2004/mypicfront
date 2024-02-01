import React from 'react';

const CrearCuentaButton = ({ onCreateAccount }) => {
    return (
        <a
            href="/register"
            style={{
                left: '50%',
                transform: 'translateX(-50%)',
                top: '700px',
                position: 'absolute',
                color: 'white',
                fontSize: '14px',
                fontFamily: 'Inter',
                fontWeight: '700',
                wordWrap: 'break-word',
            }}
            onClick={onCreateAccount}
        >
            Crear cuenta nueva
        </a>
    );
};

export default CrearCuentaButton;
