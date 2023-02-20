import React from 'react';

import loader from './assets/loader.svg'
import {LoaderImg, WrapperLoader} from './style';

export const Loader = () => (
    <WrapperLoader data-test-id='loader'>
        <LoaderImg src={loader} alt="loader"/>
    </WrapperLoader>
);

