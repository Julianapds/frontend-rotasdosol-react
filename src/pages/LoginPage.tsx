import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
    const style = {
        height: '100vh',
        maxHeight: '600px'    
    };

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email === 'admin@rotasdosol.com' && senha === '1234') {
            navigate('/dashboard_admin');
        } else {
            setShowAlert(true);
        }
    };

    return (
        <div className="container d-flex justify-content-center text-center mt-4" style={style}>
            <form className="form-signin" onSubmit={handleLogin} autoComplete="off">
                <h1 className="h3 mb-3 font-weight-normal">Faça login</h1>

                <input type="email" id="inputEmail" className="form-control mb-3" placeholder="Seu email" required autoFocus 
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" id="inputPassword" className="form-control mb-2" placeholder="Senha" required 
                    value={senha} onChange={(e) => setSenha(e.target.value)} />

                <button type="submit" className="btn btn-lg btn-success btn-block w-100 mt-2 mb-3">Entrar</button>
                
                {showAlert && 
                    <div className="alert alert-danger" role="alert">
                        Credenciais inválidas. Tente novamente.
                    </div>
                }

                <div className="row p-0">
                    <a href="#" onClick={() => navigate('/cadastro')}>Cadastre-se</a>
                    <a href="#" onClick={() => navigate('/recuperar_senha')}>Esqueci minha senha</a>
                </div>
                <p className="mt-5 mb-3 text-muted">© 2023-2023</p>
            </form>
        </div>
    );
}

export default Login;
