import user1 from '/images/user1.jpg';
import user2 from '/images/user2.jpg';
import user3 from '/images/user3.jpg';
const UserFeedbackCarousel = () => {
    return (
        <div id="reviewsCarousel" className="carousel slide bg-info text-light p-3" data-ride="carousel" data-interval="3000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center">
                            <img src={user1} alt="User 1" className="rounded-circle mb-3" style={{ width: "100px" }} />
                            <h5>João Silva</h5>
                            <p>"A viagem foi incrível! Tudo foi perfeitamente organizado e a equipe foi super atenciosa. Recomendo!"</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center">
                            <img src={user2} alt="User 2" className="rounded-circle mb-3" style={{ width: "100px" }} />
                            <h5>Maria Oliveira</h5>
                            <p>"As acomodações eram confortáveis e os passeios eram divertidos. Uma experiência inesquecível!"</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center">
                            <img src={user3} alt="User 3" className="rounded-circle mb-3" style={{ width: "100px" }} />
                            <h5>Fernanda Oliveira</h5>
                            <p>"As acomodações eram confortáveis e os passeios eram divertidos. Uma experiência inesquecível!"</p>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#reviewsCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Anterior</span>
            </a>
            <a className="carousel-control-next" href="#reviewsCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Próximo</span>
            </a>
        </div>
    );
};

export default UserFeedbackCarousel;
