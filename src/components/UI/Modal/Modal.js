import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/auxiliary';
import Button from '../Button/Button';

const Modal = (props) =>{
    return <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className={classes.Modal}
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
            }}>
        {props.children}
        <Button btnType="Success">Proceed</Button>
        <Button clicked={props.modalClosed} btnType="Danger">Cancel</Button>
        </div>
    </Aux>
};

export default Modal;