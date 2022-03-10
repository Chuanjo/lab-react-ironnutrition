import React from 'react';

function FoodBox(props) {
    
    const {name, calories, quantity, image} = props.eachFoodProps

    return (
        <div>
       


        <img width="400px"src={image} />
        <p>
            <strong>{name}</strong>
            <br />
            <small>{calories}</small>
        </p>
        {/* <input type="number" value="1" />
        <button>+</button> */}
        </div>
    );
}

export default FoodBox;
