import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout=(props)=>{
    return(
        <div className="Layout">
            <Toolbar />
            <SideDrawer />


            <main className="Content">
                {props.children}
            </main>

        </div>
    )

}

export default layout;
