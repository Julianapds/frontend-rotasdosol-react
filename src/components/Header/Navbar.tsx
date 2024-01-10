import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul className="nav d-flex justify-content-center shadow-sm bg-success">
                <li className="nav-item">
                    <Link className="nav-link active text-light font-weight-bold" to="/">início</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/ofertas">ofertas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/pacotes">pacotes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/contatos">contatos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/reservas">reservas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/cadastro">cadastro</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
