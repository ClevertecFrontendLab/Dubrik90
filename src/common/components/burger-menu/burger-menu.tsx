import React, {useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';

import {setIsMenuOpenAC} from '../../../app/app-reducer';
import iconArrow from '../nav/assets/icon-arrow.svg'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {useBodyScrollLock} from '../../hooks/use-body-scroll-lock';
import {MenuItem, MenuList} from '../nav/style';

import {StyledBurgerMenu} from './style';
import {ROUTS} from '../../../constans/routs';
import {CategoriesType} from '../../../types/types';

export const BurgerMenu = () => {

    const [isBodyLocked, setBodyLocked] = useBodyScrollLock();

    const dispatch = useAppDispatch();

    const isMenuOpen = useAppSelector(state => state.app.isMenuOpen);
    const [isMenuListOpen, setIsMenuListOpen] = useState<boolean>(true);
    const categories = useAppSelector(state => state.books.categories);
    const isActiveLink = useLocation().pathname.includes('books');
    const statusLoading = useAppSelector(state => state.app.status);

    const onClickHandler = () => {
        setIsMenuListOpen(!isMenuListOpen);
    }
    const onClickCloseHandler = () => {
        dispatch(setIsMenuOpenAC({value: false}));

        setIsMenuListOpen(false);
    }

    return (
        <StyledBurgerMenu data-test-id='burger-navigation' isMenuOpen={isMenuOpen}
                          isMenuListOpen={isMenuListOpen} onClick={e => e.stopPropagation()}>
            <div>
                <NavLink className={isActiveLink ? 'active' : ''}
                         onClick={onClickHandler}
                         data-test-id='navigation-showcase'
                         to={ROUTS.ALL}>Витрина книг
                    <button onClick={onClickHandler} type='button'>
                        <img src={iconArrow} alt="arrow"/>
                    </button>
                </NavLink>
            </div>
            <MenuList isMenuListOpen={isMenuListOpen}>
                {statusLoading === 'idle'
                    &&
                    <NavLink data-test-id='navigation-books'
                             to={ROUTS.ALL}
                             onClick={onClickCloseHandler}>
                        Все книги
                    </NavLink>
                }
                {statusLoading === 'idle' &&
                    categories.map((link: CategoriesType) => (
                        <MenuItem key={link.id}>
                            <NavLink to={`books/${link.path}`}
                                     onClick={onClickCloseHandler}>
                                {link.name}
                                <span>10</span>
                            </NavLink>
                        </MenuItem>
                    ))
                }
            </MenuList>
            <div>
                <NavLink data-test-id='navigation-terms'
                         onClick={onClickCloseHandler} to={ROUTS.RULES}>Правила пользования</NavLink>
                <NavLink data-test-id='navigation-contract'
                         onClick={onClickCloseHandler} to={ROUTS.TREATY}>Договор оферты</NavLink>
            </div>
        </StyledBurgerMenu>
    )
}
