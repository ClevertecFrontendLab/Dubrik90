import React from 'react';
import {Outlet} from 'react-router-dom';

import {setIsMenuOpenAC} from '../../../app/app-reducer';
import {MainContent, MainWrap} from '../../../pages/main/main-style';
import {Container, Wrapper} from '../../../styled/styled-wpapper';
import {useAppDispatch} from '../../hooks/hooks';
import {Footer} from '../footer';
import {Header} from '../header';
import {ScrollToTop} from '../../hooks/scroll-to-top';

export const Layout = () => {
    const dispatch = useAppDispatch()

    const onClickCloseHandler = () => {
        dispatch(setIsMenuOpenAC({value: false}))
    }

    return (
        <React.Fragment>
            <ScrollToTop/>
            <Wrapper>
                <Header/>
                <MainWrap className="main-page">
                    <Container>
                        <MainContent onClick={onClickCloseHandler}>
                            <Outlet/>
                        </MainContent>
                    </Container>
                </MainWrap>
                <Footer/>
            </Wrapper>
        </React.Fragment>
    )
}
