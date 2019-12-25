import React from 'react';
import Aux from '../../hoc/auxiliary';
import classes from '../Layout/Layout.module.css';

const layout = props => (
    <Aux>
        <div>Toolbar, Side drawer, Backdrop</div>
        <main className='Content'>
            {props.children}
        </main>
    </Aux>
);

export default layout;