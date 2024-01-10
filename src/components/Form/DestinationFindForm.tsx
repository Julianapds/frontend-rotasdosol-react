import Button from '../button/Button';

const DestinationFindForm = () => {
    return (
        <section className="background-home p-4">
            <h1 className="text-center mt-3 mb-3">Encontre seu próximo destino</h1>
            <form>
                <div className="row justify-content-center align-items-center">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputOrigem">Origem</label>
                        <input type="text" className="form-control" id="inputOrigem" placeholder="Origem" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputDestino">Destino</label>
                        <input type="text" className="form-control" id="inputDestino" placeholder="Destino" />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputIda">Data da ida</label>
                        <input type="date" className="form-control" id="inputIda" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputVolta">Data da volta</label>
                        <input type="date" className="form-control" id="inputVolta" />
                    </div>
                </div>
                <div className="row justify-content-center mt-3 mb-3">
                    <div className="form-group col-md-8 mt-2">
                        <Button text="Buscar" className="btn bg-success w-100 text-light" />
                    </div>
                </div>
            </form>
        </section>
    );
};

export default DestinationFindForm;
