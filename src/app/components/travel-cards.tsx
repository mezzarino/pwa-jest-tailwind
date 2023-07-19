import Card from "./card";
import { cardData } from "../constants/card-data";

const TravelCards = () => {
    return (
        <>
            {cardData.map((card) => (
                <Card key={card.id} imageSrc={card.imageSrc} imageAlt={card.imageAlt} title={card.title} link={card.link} />
            ))}
        </>
    );
};

export default TravelCards;