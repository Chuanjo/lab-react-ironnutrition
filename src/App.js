import React from 'react';
import { useState } from "react"
import './App.css';
import FoodBox from './components/FoodBox';
import allFoods from './foods.json';

// const initialFoods = []

function App() {
  // setAllFood

  const [ allFood,  ] = useState(allFoods)

  return (
    <div>

      <h1>Hola</h1>

      <form action="submit">

        <button>Add Food</button>

        <br />

        <label htmlFor="name"></label>
        <input type="text" name="name"/>

        <br />

        <label htmlFor="number of calories"></label>
        <input type="number" name="number of calories" />

        <br />

        <label htmlFor="image"></label>
        <input type="file" name="image" />
            
      </form>
     
      
      {allFood.map((eachFood, index)=>{

        return (<FoodBox eachFoodProps={eachFood} key={index + eachFood.name}/>)
      })}


    </div>
  );
}

export default App;
