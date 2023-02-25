import React from 'react';
import {Outlet} from 'react-router-dom';

import {NavMenu} from '../nav/nav-menu';

export const LayoutMainPage = () => (
    <React.Fragment>
        <NavMenu isBurgerMenu={false}/>
        <Outlet/>
    </React.Fragment>
);

