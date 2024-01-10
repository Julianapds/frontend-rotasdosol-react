import Button from '../button/Button';

const EmailSubscription = () => {
 
    return (
        <div className="p-4 bg-light mt-5 text-center">
            <h4>Inscreva-se para receber ofertas exclusivas</h4>
            <form className="d-flex flex-column align-items-center">
                <div className="form-group d-flex justify-content-center mt-3 col-lg-6 col-md-8 col-sm-12">
                    <input 
                        type="email" 
                        className="form-control" 
                        id="inputemail" 
                        placeholder="Insira seu e-mail" 
                        value=""
                    />
                </div>
                <Button text="Quero recebê-las!" className="btn btn-outline-success w-25 mt-2" />
            </form>
        </div>
    );
};

export default EmailSubscription;
