import Card from "./card";
import Trust from "../assets/images/trust.svg"
import Fast from "../assets/images/fast.svg"
import Flexible from "../assets/images/flexible.svg"
import HighAmout from "../assets/images/high_amount.svg"
import { Feather } from "lucide-react";

const CardGrid = () => {
  const cardData = [
    {
      title: 'Trust',
      description: 'Regulated by Securities and Exchange Commission (SEC) Philippines',
      imgSrc: Trust,
      imgAlt: 'Trust Icon'
    },
    {
      title: 'High Amount',
      description: 'Get the highest loan amounts compared to other banks and lenders',
      imgSrc: HighAmout,
      imgAlt: 'High Amount Icon'
    },
    {
      title: 'Fast',
      description: 'Get the money within a few hours on the same day',
      imgSrc: Fast,
      imgAlt: 'Fast Icon'
    },
    {
      title: 'Flexible',
      description: 'Loans are tailored to your needs and run through an easy process',
      imgSrc: Flexible,
      imgAlt: 'Flexible Icon'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mx-4 sm:mx-6 xl:gap-12 xl:mx-12">

      {cardData.map((card, index) => (
        <div key={index} className="col-span-1 mx-auto sm:mr-0 sm:ml-0">
          <Card
            title={card.title}
            description={card.description}
            imgSrc={card.imgSrc}
            imgAlt={card.imgAlt}
          />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
