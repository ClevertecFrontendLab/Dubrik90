import React, {useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';

import {setIsMenuOpenAC} from '../../../app/app-reducer';
import iconArrow from './assets/icon-arrow.svg'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {useBodyScrollLock} from '../../hooks/use-body-scroll-lock';

import {MenuItem, MenuList, StyledNavMenu} from './style';
import {ROUTS} from "../../../constans/routs";
import {CategoriesType} from "../../../types/types";

export const NavMenu = () => {
    const dispatch = useAppDispatch();

    const isMenuOpen = useAppSelector(state => state.app.isMenuOpen);
    const [isMenuListOpen, setIsMenuListOpen] = useState<boolean>(true);
    const [isBodyLocked, setBodyLocked] = useBodyScrollLock();
    const categories = useAppSelector(state => state.books.categories);
    const isActiveLink = useLocation().pathname.includes('books');
    const statusLoading = useAppSelector(state => state.app.status);
    const books = useAppSelector(state => state.books.books);
    const numberOfBooks = (category: string) => books?.filter((el) => el.categories.includes(category)).length;
    const onClickHandler = () => {
        setIsMenuListOpen(!isMenuListOpen);
    }

    const onClickCloseHandler = () => {
        dispatch(setIsMenuOpenAC({value: false}));
        setIsMenuListOpen(false);
    }

    return (
        <StyledNavMenu data-test-id='burger-navigation' isMenuOpen={isMenuOpen}
                       isMenuListOpen={isMenuListOpen} onClick={e => e.stopPropagation()}>
            <div>
                <a className={isActiveLink ? 'active' : ''}
                   // onClick={onClickHandler}
                   data-test-id='navigation-showcase'
                >Витрина книг
                    <button onClick={onClickHandler} type='button'>
                        <img src={iconArrow} alt="arrow"/>
                    </button>
                </a>
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
                                <span>{numberOfBooks(link.name)}</span>
                            </NavLink>
                        </MenuItem>
                    ))
                }
            </MenuList>
            <div>
                <NavLink data-test-id='navigation-terms'
                         onClick={onClickCloseHandler} to={ROUTS.RULES}>Правила
                    пользования</NavLink>
                <NavLink data-test-id='navigation-contract'
                         onClick={onClickCloseHandler} to={ROUTS.TREATY}>Договор оферты</NavLink>
            </div>
        </StyledNavMenu>
    )
}
