import CarouselComponent from "../components/Carousel/Carousel";
import UserFeedbackCarousel from "../components/Carousel/UserFeedbackCarousel";
import DestinationFindForm from "../components/Form/DestinationFindForm";
import EmailSubscription from "../components/Form/EmailSubscription";

const HomePage = () => {
    return (
        <>
        <CarouselComponent />
        <DestinationFindForm />
        <EmailSubscription /> 
        <UserFeedbackCarousel />
        </>
    )
}

export default HomePage;