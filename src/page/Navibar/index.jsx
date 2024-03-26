import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './index.css';

function Navibar() {
    return (
        <Navbar
            fixed="top"
            data-bs-theme="dark"
            expand="lg"
            bg="dark"
            className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Zhupi222</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-center me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="article">Article</Nav.Link>
                        <NavDropdown
                            title="Dropdown"
                            id="basic-nav-dropdown"
                            >
                            <NavDropdown.Item href="#action/3.1">
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="justify-content-end">
                        <Navbar.Text>
                            <a href="login" target="_blank">
                                Login
                            </a>
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navibar;
