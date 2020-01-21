import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type:'salad' },
    {label: 'Bacon', type:'bacon' },
    {label: 'Cheese', type:'cheese' },
    {label: 'Meat', type:'meat'}
];

const burgerControls = props =>(
    <div className={classes.BuildControls}>
        <p>Current Price: INR {props.price}</p>
        {controls.map(ctrl =>(
            <BuildControl key={ctrl.label} label={ctrl.label}
             added={()=>props.ingredientAdded(ctrl.type)} 
             removed={()=>props.ingredientRemoved(ctrl.type)}
             disabled={props.disabled[ctrl.type]}/>
        )
        )}
        <button onClick={props.ordered} disabled={!props.purchaseable} className={classes.OrderButton}>Check Out</button>
    </div>
);

export default burgerControls;