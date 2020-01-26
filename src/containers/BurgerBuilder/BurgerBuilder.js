import React, { Component } from 'react';
import Aux from '../../hoc/auxiliary';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Axios from '../../Axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import orderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDINET_PRICES = {
    salad: 10,
    cheese: 25,
    meat: 75,
    bacon: 30
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 15,
        purchaseable: false,
        purchasing: false,
        loading: false
    }
    
    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients).map((igKey) =>{
            return ingredients[igKey];
        }).reduce((sum , el)=>{ //calculates sum
            return sum + el;
        },0);
        this.setState({purchaseable: sum>0});
    }
    
    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDINET_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);   
    }

    removeIngredientHandler = (type )=>{
        const oldCount = this.state.ingredients[type];
         if(oldCount<=0){
             return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDINET_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);   
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () =>{
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () =>{
        this.setState({loading: true})
        const order = {
            ingredients: this.state.ingredients,
            totalPrice: this.state.totalPrice,
            customer : {
                name: "Yash Salian",
                address: {
                    city: "Test",
                    state: "TestState",
                    country: "TestCountry"
                },
                email: "test@test.com"
            }
        }
        Axios.post('/orders.json', order).then(response => this.setState({loading:false, purchasing:false})).catch(error => this.setState({loading:false, purchasing:false}));
    }

    render(){
        const disabledInfo ={
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = <OrderSummary ingredient={this.state.ingredients} price={this.state.totalPrice}/>
        if(this.state.loading){
            orderSummary = <Spinner />
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} continue={this.purchaseContinueHandler} >
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler} 
                disabled={disabledInfo}
                purchaseable={this.state.purchaseable}
                ordered={this.purchaseHandler}
                price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;