import React, {Component} from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state={
        showSideDrawer: true

    }
    sideDrawerClosedHandler=()=>{

        this.setState({showSideDrawer: false})
    }

   //handler that toggle sidebar menu and set state dependable on the old state  to the opposite state
    sideDrawerToggleHandler=()=>{
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }


    render(){
        return(
            <div className="Layout">
                <Toolbar  drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>


                <main className="Content">
                    {this.props.children}
                </main>

            </div>
        )

    }


}

export default Layout;
