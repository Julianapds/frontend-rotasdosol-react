import Button from '../button/Button';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import logotipo from '/images/logotipo.png';


const Header = () => {
    return (
        <>
            <header className="p-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 d-flex">
                            <Button text="A+" className="btn-outline-secondary mr-2" />
                            <Button text="A-" className="btn-outline-secondary mr-2" />
                            <Button text="Contraste" className="btn-outline-secondary" />
                        </div>
                        <div className="col-md-6 d-flex justify-content-end align-items-center">
                            <Link to="/login" className="btn btn-outline-secondary mr-2">Login</Link>
                            <Link to="/cadastre-se" className="btn btn-success mr-2">Cadastre-se</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <img src={logotipo} alt="Logo" className="img-fluid" style={{ maxWidth: "100px" }} />
                        </div>
                    </div>
                </div>
            </header>
            <Navbar />
        </>
    );
};

export default Header;
