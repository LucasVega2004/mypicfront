import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Inicio from './Inicio';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Layout = () => {
    return (
        <Container fluid className="vh-100">
            <Row className="h-100">
                <Row className="d-md-none bg-light p-3 w-100">
                    <h5>Historias</h5>
                </Row>
                {/* Barra lateral izquierda (oculta en dispositivos móviles) */}
                <Col md={3} className="d-none d-md-block p-4 h-100" style={{ backgroundColor: '#5a9889' }}>
                    <h5>Barra lateral izquierda</h5>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/home">Enlace 1</Nav.Link>
                        <Nav.Link href="/profile">Enlace 2</Nav.Link>
                        <Nav.Link href="/messages">Enlace 3</Nav.Link>
                    </Nav>
                </Col>

                {/* Contenido central */}
                <Col md={6} className=" p-4 h-100 d-flex flex-column" style={{ backgroundColor: '#5a9889' }}>
                    {/* Barra superior */}
                    <Navbar bg="light" className='d-none d-md-block' >
                        <Navbar aria-controls="basic-navbar-nav" />
                        <Navbar id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Inicio</Nav.Link>
                                <Nav.Link href="/explorar">Explorar</Nav.Link>
                                <Nav.Link href="/notificaciones">Notificaciones</Nav.Link>
                            </Nav>
                        </Navbar>
                    </Navbar>

                    {/* Contenido de la página */}
                    <Outlet />
                    <Inicio />
                </Col>

                {/* Barra lateral derecha (oculta en dispositivos móviles) */}
                <Col md={3} className="d-none d-md-block p-4 h-100" style={{ backgroundColor: '#5a9889' }}>
                    <h5>Barra lateral derecha</h5>
                    {/* Contenido de la barra lateral derecha */}
                </Col>
            </Row>

            {/* Barra inferior en dispositivos móviles */}
            <Row className="d-md-none fixed-bottom p-3 w-100" style={{backgroundColor:"rgba(90, 152, 137"}}>
                <Col xs={3}><i className="bi bi-bag-fill p-4"></i></Col>
                <Col xs={3}><i className="bi bi-binoculars p-4"></i></Col>
                <Col xs={3}><i className="bi bi-browser-chrome p-4"></i></Col>
                <Col xs={3}><i className="bi bi-hand-thumbs-up p-4"></i></Col>
            </Row>

        </Container>
    );
};

export default Layout;
