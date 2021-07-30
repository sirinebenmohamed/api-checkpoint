import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Nvbar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">API Checkpoint</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/">Home</Link>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default Nvbar
