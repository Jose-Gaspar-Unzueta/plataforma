import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import { Link  } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext";

export default function Navegacion() {
  const { signOut } = useContext(AuthContext);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>LOGO AGM</Navbar.Brand>   
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link className="nav-link" to="/bienvenida">
                    Navegar
                </Link>
            </Nav>
            <Nav>
                <NavLink>Salir</NavLink>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
