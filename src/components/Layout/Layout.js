import React, {Component} from 'react';
import Aux from '../../hoc/auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';
import classes from '../Layout/Layout.module.css';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    sideDrawerClosedHandler = () =>{
        this.setState({
                showSideDrawer:false
            }
        )
    }
    render(){
        return(
            <Aux>
                <Toolbar />
                <Sidedrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
             </Aux>
        );
    }
}

export default Layout;