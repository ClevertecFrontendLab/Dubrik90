import React from 'react';

import close from './assets/close.svg';
import other from './assets/other.svg';
import {ErrorWrapper} from './style';

export const Error = () => (
    <ErrorWrapper data-test-id='error'>
        <img src={other} alt="other"/>
        <p>
            Что-то пошло не так. Обновите страницу через некоторое время.
        </p>
        <button type="button">
            <img src={close} alt="close"/>
        </button>
    </ErrorWrapper>
);

