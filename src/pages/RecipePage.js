import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { my_recipe } from '../recipe';

const RecipePage = () => {
  let recipe_id = window.location.pathname.split('/')[2];
  return (
    <div>
      <Header />
       <div className="container">
      <div className="inner-container" style={{ marginTop: "100px" }}>
        <Link to="/recipe" className="back-button">
          <img src="/img/arrow-left.png" alt="Back to Recipe List" className="back-icon" style={{ width: "65px", height: "65px" }} />
        </Link>
        <h1>{my_recipe[recipe_id].name}</h1>
        <p className="recipe-heading">Preparation Time: {my_recipe[recipe_id].preparation_time} | Servings: {my_recipe[recipe_id].servings} persons </p>
        <img src={my_recipe[recipe_id].img} alt="" className="recipe-image"/>
        <h3>Ingredients:</h3>
        <ul className='list1'>
          {my_recipe[recipe_id].ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions:</h3>
        <ol className='list2'>
          {my_recipe[recipe_id].instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>

      <Footer />
    </div>
  );
}

export default RecipePage;
