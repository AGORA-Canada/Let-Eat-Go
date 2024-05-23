import React, { useState } from "react";
import StarIcon from "../images/star-icon.svg";
import SushiwayLogo from "../images/brand_logo_sushiway.png";
import TOrderLogo from "../images/brand_logo_torder2.png";
import TwoHornLogo from "../images/brand_logo_twohorns.png";
import LeftArrow from "../images/left-arrow.svg";
import RightArrow from "../images/right-arrow.svg";

const clients = [
  {
    id: "sushi-way",
    name: "Sushiway Japanese Cuisine",
    review:
      "Partnering with Let Eat Go was a game-changer for our restaurant. Their expertise in restaurant marketing strategies helped us attract more diners and increase our revenue significantly. Their creative campaigns and targeted promotions brought a fresh buzz to our brand, making us stand out in a competitive market. We're thrilled with the results and highly recommend Let Eat Go's services to fellow restaurant owners.",
    logo: SushiwayLogo,
  },
  {
    id: "t-order",
    name: "T-Order",
    review:
      "We've been working with Let Eat Go for our restaurant's digital marketing needs, and the results have been phenomenal. Their team understands the unique challenges of the restaurant industry and has crafted tailored solutions that drive foot traffic and boost online visibility. From social media campaigns to email marketing, Let Eat Go has helped us connect with our customers in meaningful ways. Their dedication and expertise have been invaluable to our success.",
    logo: TOrderLogo,
  },
  {
    id: "two-horn",
    name: "Two Horn Korean BBQ House",
    review:
      "As a restaurant owner, finding the right marketing partner is crucial, and we're fortunate to have found Let Eat Go. Their comprehensive approach to restaurant marketing, including menu optimization, local SEO strategies, and customer engagement initiatives, has had a significant impact on our business. We've seen a noticeable increase in bookings and customer loyalty, thanks to Let Eat Go's innovative ideas and attention to detail. We highly recommend Let Eat Go's services to any restaurant looking to thrive in today's competitive landscape.",
    logo: TwoHornLogo,
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + clients.length) % clients.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  return (
    <div className="bg-[#ECECEC] h-max">
      <div className="w-4/5 m-auto py-20 text-center">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-4xl font-bold">Customer reviews</h2>
          <p className="w-3/5">
            We provide website and online ordering program services for your
            store, along with photography services to be included within them at
            low commission.
          </p>
        </div>
        <div className="flex justify-center mt-20">
          {[...Array(5)].map((_, index) => (
            <img src={StarIcon} alt="Star" key={index} />
          ))}
        </div>
        <div className="mt-10 h-80 relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-10 transform -translate-y-1/2 text-gray-800 font-bold py-2 px-4"
          >
            <img src={LeftArrow} alt="Previous" />
          </button>
          <div className="flex flex-col items-center justify-between gap-12">
            <div className="w-4/6">{clients[currentIndex].review}</div>
            <img
              src={clients[currentIndex].logo}
              alt={clients.name}
              className="object-cover"
            />
          </div>
          <button
            onClick={handleNext}
            className="absolute right-0 top-10 transform -translate-y-1/2 text-gray-800 py-2 px-4 text-4xl"
          >
            <img src={RightArrow} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
