import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/NavItem";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <>
            <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container>
                    <NavItem className="nav-brand fs-3">
                        <Link to="/" className="nav-link">
                            Lista de Exercícios
                        </Link>
                    </NavItem>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
