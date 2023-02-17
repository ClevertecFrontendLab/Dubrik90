import {FC} from 'react';

import {StyledButton} from './styled-button';

type PropsDefault = {
    type: 'button' | 'submit' | 'reset',
    disabled: boolean
    children: string  | undefined;
    onClick: ()=>void;
}


type StyleButton = {
    colorCustom: string
    bgColorHover: string
    bgColorCustom: string
    maxWidth: string,
    margin: string
    padding: string
    width:string
    borderRadius: string,
    isBooked: boolean,
    isOpen: boolean,
}


export type PropsButtonType = PropsDefault & StyleButton;

export type PropsButton = Partial<PropsButtonType>

export const Button: FC<PropsButton> = (props) => (
    <StyledButton {...props}/>
);


