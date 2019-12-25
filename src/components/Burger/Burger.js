import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
    const transformedIngredients = Object.keys(props.ingredients).map(igkey => { //['salad', 'bacon', 'cheese', 'meat']
        return [...Array(props.ingredients[igkey])].map((_, i) => { //will give an array with lenght equal number of each ingredient
            return <BurgerIngredient key={igkey+i} type={igkey} />;
        });
    });
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;