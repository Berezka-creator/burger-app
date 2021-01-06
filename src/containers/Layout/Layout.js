import React, {Component} from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import './Layout.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Layout extends Component {

    state={
        showSideDrawer: false
    }

    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer: false});
    }

   //handler that toggle sidebar menu and set state dependable on the old state  to the opposite state
    sideDrawerToggleHandler=()=>{
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render(){
        return(
            <Aux>
                <Toolbar  drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;
