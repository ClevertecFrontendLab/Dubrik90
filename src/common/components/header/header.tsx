import React from 'react';
import {Link} from 'react-router-dom';

import {setIsMenuOpenAC} from '../../../app/app-reducer';
import avatar from './assets/avatar.png';
import logo from './assets/logo.svg';
import {Burger} from '../../../styled/menu-burger/style-burger';
import {Container} from '../../../styled/styled-wpapper';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';

import {
    HeaderContent,
    HeaderImageLogo,
    HeaderImageProfile,
    HeaderProfile,
    HeaderTitle,
    HeaderWrapper,
    ProfileName
} from './style';
import {ROUTS} from "../../../constans/routs";
import {NavMenu} from "../nav";

export const Header = () => {
    const dispatch = useAppDispatch();
    const isMenuOpen = useAppSelector(state => state.app.isMenuOpen);

    const onClickBurger = () => {
        dispatch(setIsMenuOpenAC({value: !isMenuOpen}));
    }
    const onClickCloseBurger = () => {
        if (isMenuOpen) {
            dispatch(setIsMenuOpenAC({value: false}));
        }
    }

    return (
        <HeaderWrapper>
            <Container>
                <HeaderContent onClick={onClickCloseBurger}>
                    <NavMenu
                        isBurgerMenu={true}
                    />
                    <HeaderImageLogo width="170px" height="40px" borderRadius="0">
                        <Link to={ROUTS.HOME}>
                            <img src={logo}
                                 alt="Logo"/>
                        </Link>
                    </HeaderImageLogo>
                    <Burger data-test-id='button-burger' isOpenBurger={isMenuOpen} onClick={onClickBurger}><span/></Burger>
                    <HeaderTitle>
                        Библиотека
                    </HeaderTitle>
                    <HeaderProfile>
                        <ProfileName>Привет, Иван!</ProfileName>
                        <HeaderImageProfile width="58px" height="58px">
                            <Link to={ROUTS.HOME}>
                                <img src={avatar}
                                     alt="avatar"/>
                            </Link>
                        </HeaderImageProfile>
                    </HeaderProfile>
                </HeaderContent>
            </Container>
        </HeaderWrapper>
    )
};

