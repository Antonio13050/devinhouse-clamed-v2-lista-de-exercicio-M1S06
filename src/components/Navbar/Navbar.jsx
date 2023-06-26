import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/exercicio1">Exercicio 1</Link>
        </nav>
    );
};

export default Navbar;
