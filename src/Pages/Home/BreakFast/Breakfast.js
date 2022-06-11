import React from "react";
import BreakfastDetails from "../Details/BreakfastDetails";
import '../common/BLD.css';
import Menu from "../../Shared/Menu/Menu";

const Breakfast = () => {
  const breakfasts = [
    { id: 1, title: 'Bagel and Cream Cheese', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ', price: 6.99, image: 'https://i.ibb.co/RHC7nvT/breakfast1.png' },
    { id: 2, title: 'Breakfast Sandwich', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', price: 9.99, image: 'https://i.ibb.co/5kbFt0L/breakfast2.png' },
    { id: 3, title: 'Backed Chiken', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ', price: 10.99, image: 'https://i.ibb.co/47JT7LX/breakfast3.png' },
    { id: 4, title: 'Eggs Benedict', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ', price: 8.99, image: 'https://i.ibb.co/DQPWwy9/breakfast4.png' },
    { id: 5, title: 'Tost Croissant Fried Egg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', price: 19.99, image: 'https://i.ibb.co/j4fhFsC/breakfast5.png' },
    { id: 6, title: 'Full Breakfast Fried Egg Tost Brunch', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', price: 3.99, image: 'https://i.ibb.co/VgPdtS6/breakfast6.png' }
  ];

  return (
    <div>
      <Menu></Menu>
      <div className="container details-container my-4">
        {
          breakfasts.map( breakfast => <BreakfastDetails key={breakfast.id} breakfast={breakfast}></BreakfastDetails> )
        }
      </div>
    </div>
  );
};

export default Breakfast;
