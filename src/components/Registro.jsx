import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CrearCuentaButton from './CrearCuentaButton';
import ConfirmEmail from './ConfirmEmail';
import EmailView from './EmailView';
import SelectUsername from './SelectUsername';

const Registro = () => {
    const [vistaActual, setVistaActual] = useState('mobile'); // Estado para controlar la vista actual
    const [userData, setUserData] = useState({
        email: '',
        username: '',
        // ... Otros campos necesarios
    });

    const navigate = useNavigate();

    const handleEmailSubmit = (email) => {
        setUserData({ ...userData, email });
        setVistaActual('confirmemail'); // Cambia a la siguiente vista
    };

    const handleConfirmSubmit = (confirmCode) => {
        setUserData({ ...userData, confirmCode });
        setVistaActual('selectusername'); // Cambia a la siguiente vista
    };

    const handleUsernameSubmit = (username) => {
        setUserData({ ...userData, username });
        // Lógica adicional si es necesario
        // Por ejemplo, enviar la solicitud de registro al servidor

        // Redirige a la vista de inicio después de completar el registro
        navigate('/inicio');
    };

    return (
        <div>
            {/* Renderiza la vista actual basada en el estado */}
            {vistaActual === 'mobile' && <EmailView onSubmit={handleEmailSubmit} />}
            {vistaActual === 'confirmemail' && <ConfirmEmail onSubmit={handleConfirmSubmit} />}
            {vistaActual === 'selectusername' && <SelectUsername onSubmit={handleUsernameSubmit} />}
        </div>
    );
};

export default Registro;
