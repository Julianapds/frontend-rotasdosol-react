import credito from '/images/credito.jpg';
import boleto from '/images/boleto.jpg';
import selo1 from '/images/selo1.jpg';
import selo2 from '/images/selo2.jpg';
import cartao from '/images/cartao.jpg';
const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-3">
                        <h5>Sobre</h5>
                        <p>Rotas do Sol</p>
                        <p>Desenvolvido por Juliana Pires</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Contato</h5>
                        <p>Email: reserveja.rotasdosol@gmail.com</p>
                        <p>Telefone: (21)8752-8952</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Meios de Pagamento</h5>
                        <img src={credito} alt="credito" />
                        <img src={boleto} alt="boleto" />
                        <img src={cartao} alt="Pix" />
                    </div>
                    <div className="col-md-3">
                        <h5>Selos</h5>
                        <img src={selo1} alt="pet friendly" />
                        <img src={selo2} alt="boleto" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
