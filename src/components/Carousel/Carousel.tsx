import penedo from '/images/penedo rjj.png';
import guaratiba from '/images/guaratiba.png';
const CarouselComponent = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" data-interval="3000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={penedo} className="d-block w-100" alt="Penedo" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Penedo</h5>
                        <p>Penedo é uma região e parque ecológico do município de Itatiaia, localizado na região sul do estado brasileiro do Rio de Janeiro. É a principal colônia finlandesa do Brasil.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={guaratiba} className="d-block w-100" alt="Ilha de Guaratiba" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Ilha de Guaratiba</h5>
                        <p>A Ilha de Guaratiba é um lugar tranquilo, bastante rural e lembra uma cidade de interior. A natureza tem levado muitos cariocas que buscam um estilo de vida mais calmo a buscar esse bairro.</p>
                    </div>
                </div>
                {/* Adicione mais itens de carrossel conforme necessário */}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Anterior</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Próximo</span>
            </a>
        </div>
    );
};

export default CarouselComponent;
