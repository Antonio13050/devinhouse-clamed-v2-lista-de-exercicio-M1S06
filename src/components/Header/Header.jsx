import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/NavItem";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <>
            <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container>
                    <NavItem className="nav-brand fs-3">
                        <NavLink to="/" className="nav-link">
                            Lista de Exercícios
                        </NavLink>
                    </NavItem>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
