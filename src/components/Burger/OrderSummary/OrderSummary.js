import React from 'react';
import Aux from '../../../hoc/auxiliary';


const orderSummary = props =>{
const ingredientSummary = Object.keys(props.ingredient).map(igkey => <li key={igkey}><span style={{textTransform: 'capitalize'}}>{igkey}</span>: {props.ingredient[igkey]}</li>);
    return (
        <Aux>
            <div>You Order Summary is:</div>
            <div>
                <ul>
                    {ingredientSummary}
                </ul>
                     <p><strong>Total Price: INR {props.price}</strong></p>
                <p>Continue to Checkout ?</p>
            </div>
        </Aux>
    );
}

export default orderSummary;