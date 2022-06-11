import React from "react";
import Menu from "../../Shared/Menu/Menu";
import '../common/BLD.css';
import DinnerDetails from "../Details/DinnerDetails";

const Dinner = () => {
  const dinners = [
    { id: 1, title: 'Salmon with Grapefruit and Lentil Salad', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ', price: 9.99, image: 'https://i.ibb.co/x7m7RyX/dinner1.png' },
    { id: 2, title: 'Lemony Salmon Piccata', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', price: 10.99, image: 'https://i.ibb.co/k8mt4rH/dinner2.png' },
    { id: 3, title: 'Pork Tenderloin with Quinoa Pilaf', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ', price: 12.99, image: 'https://i.ibb.co/fdGd9f1/dinner3.png' },
    { id: 4, title: 'French Fries with Cheese', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ', price: 8.99, image: 'https://i.ibb.co/cQPP88z/dinner4.png' },
    { id: 5, title: 'Garlic Butter Salmon', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', price: 6.99, image: 'https://i.ibb.co/XWY7rjz/dinner5.png' },
    { id: 6, title: 'Baked Chiken', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', price: 9.99, image: 'https://i.ibb.co/XFF7FCb/dinner6.png' }
  ];

  return (
    <div>
      <Menu></Menu>
      <div className="container details-container my-4">
        {
          dinners.map( dinner => <DinnerDetails key={dinner.id} dinner={dinner}></DinnerDetails> )
        }
      </div>
    </div>
  );
};

export default Dinner;
