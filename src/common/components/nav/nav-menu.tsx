import React, {FC, useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';

import {setIsMenuOpenAC} from '../../../app/app-reducer';
import iconArrow from './assets/icon-arrow.svg'
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {useBodyScrollLock} from '../../hooks/use-body-scroll-lock';

import {
    BurgerMenuAll,
    BurgerMenuWrapper,
    MenuItem,
    MenuList,
    NavigateMenuAll,
    NavigateMenuWrapper
} from './style';
import {ROUTS} from '../../../constans/routs';
import {CategoriesType} from '../../../types/types';

type NavMenuPropsType = {
    isBurgerMenu: boolean
}

export const  NavMenu: FC<NavMenuPropsType> = ({isBurgerMenu}) => {
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
        if (isBurgerMenu) {
            setIsMenuListOpen(false);
        }
    }

    const WrapperMenu = isBurgerMenu ? BurgerMenuWrapper : NavigateMenuWrapper
    const AllBooksWrapper = isBurgerMenu ? BurgerMenuAll : NavigateMenuAll

    return (
        <WrapperMenu
            isMenuOpen={isMenuOpen}
            isMenuListOpen={isMenuListOpen}
            onClick={e => e.stopPropagation()}>
            <div>
                <AllBooksWrapper className={isActiveLink ? 'active' : ''}>
                    Витрина книг
                    <button onClick={onClickHandler} type='button'>
                        <img src={iconArrow} alt="arrow"/>
                    </button>
                </AllBooksWrapper>
            </div>
            <MenuList isMenuListOpen={isMenuListOpen} onClick={e => e.stopPropagation()}>
                {statusLoading === 'idle'
                    &&
                    <NavLink data-test-id={isBurgerMenu ? 'burger-books' : 'navigation-books'}
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
                                <span
                                    data-test-id={isBurgerMenu ? `burger-${link.path}` : `navigation-${link.path}`}>
                                    {link.name}
                                </span>
                                <span
                                    data-test-id={isBurgerMenu ? `burger-book-count-for-${link.path}` : `navigation-book-count-for-${link.path}`}
                                >{numberOfBooks(link.name)}</span>
                            </NavLink>
                        </MenuItem>
                    ))
                }
            </MenuList>
            <div>
                <NavLink data-test-id={isBurgerMenu ? 'burger-terms' : 'navigation-terms'}
                         onClick={onClickCloseHandler} to={ROUTS.RULES}>Правила
                    пользования</NavLink>
                <NavLink data-test-id={isBurgerMenu ? 'burger-contract' : 'navigation-contract'}
                         onClick={onClickCloseHandler} to={ROUTS.TREATY}>Договор оферты</NavLink>
            </div>
        </WrapperMenu>
    )
}
