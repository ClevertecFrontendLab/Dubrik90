import styled from 'styled-components';

import {PropsButton} from './button';


export const StyledButton = styled.button<PropsButton>`
    grid-area: button;
    align-self: ${({isOpen}) => !isOpen && 'end'};

    background: ${({isBooked}) => isBooked ? 'linear-gradient(231deg, #F83600 -16.08%, #F9D423 327.37%, rgba(213,46,0,1) -53%, rgba(249,212,35,1) 297%)' : '#F9F9FA'};
    border: ${({isBooked}) => isBooked ? 'none' : '1px solid #BFC4C9'};
    border-radius: 20px;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    color: ${({isBooked}) => isBooked ? '#FFF' : '#A7A7A7'};
    padding: 11px 23px;
    cursor: pointer;
    background-size: 300%;

    transition: all 0.3s;
    @media (max-width: 590px) {
        padding: 11px 27px;
    }

    :hover {

        transition: all 0.3s;
       // background: linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);
        background-size: 100%;
        background-position: left;
    }
;


`
