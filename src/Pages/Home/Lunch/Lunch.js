import React from "react";
import LunchDetails from "../Details/LunchDetails";
import '../common/BLD.css';
import Menu from "../../Shared/Menu/Menu";

const Lunch = () => {
  const lunches = [
    { id: 1, title: 'Healthy Meal Plan', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ', price: 23.99, image: 'https://i.ibb.co/jRpLPw5/lunch1.png' },
    { id: 2, title: 'Fried Chicken Bento', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', price: 9.99, image: 'https://i.ibb.co/HK8X5bB/lunch2.png' },
    { id: 3, title: 'Terragon Rubbed Salmon', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ', price: 6.99, image: 'https://i.ibb.co/QC69dvW/lunch3.png' },
    { id: 4, title: 'Indian Lunch', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ', price: 8.99, image: 'https://i.ibb.co/yN8W7qG/lunch4.png' },
    { id: 5, title: 'Beef Steak', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', price: 15.99, image: ' https://i.ibb.co/KrPy0YR/lunch5.png' },
    { id: 6, title: 'Honey Soy Glazed Salmon with Peppers', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', price: 7.99, image: 'https://i.ibb.co/RSdG6jK/lunch6.png' }
  ];
  return (
    <div>
      <Menu></Menu>
      <div className="container details-container my-4">
        {
          lunches.map( lunch => <LunchDetails key={lunch.id} lunch={lunch}></LunchDetails> )
        }
      </div>
    </div>
  );
};

export default Lunch;
