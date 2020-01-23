import React from 'react';
import Aux from '../../hoc/auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';
import classes from '../Layout/Layout.module.css';

const layout = props => (
    <Aux>
        <Toolbar/>
        <Sidedrawer />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;