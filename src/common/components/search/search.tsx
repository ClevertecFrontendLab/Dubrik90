import React, {ChangeEvent, FC, useState} from 'react';

import {BtnColumn} from './assets/btn-column';
import filterMobile from './assets/filter-mobile.svg';
import {BtnList} from './assets/btn-list';
import {SearchIcon} from './assets/search-icon';
import searchMobile from './assets/search-mobile.svg';
import searchClose from './assets/searchClose.svg';
import sortDown from './assets/sortDown.svg';
import {SearchBlock, SearchIconMobile, SearchWrapper, SortBlock, ViewBlock} from './style';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {setSearchBookAC, setSortDownAC} from "../../../pages/book-page/api/book-page-reducer";


type SearchPropsType = {
    view: boolean
    onClick: () => void
}
export const Search: FC<SearchPropsType> = ({onClick, view}) => {
    const dispatch = useAppDispatch();

    const sort = useAppSelector(state => state.books.sortDown)
    const [openSearchInput, setOpenSearchInput] = useState(true)
    const inputSearchValue = useAppSelector(state => state.books.searchBook)

    const onChangeSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.currentTarget.value

        dispatch(setSearchBookAC({searchValue}))
    }
    const onClickOpenSearchHandler = () => {
        setOpenSearchInput(false)
    }
    const onClickCloseSearchHandler = () => {
        setOpenSearchInput(!openSearchInput)
    }
    const onClickSortHandler = () => {
        dispatch(setSortDownAC())
    }

    return (
        <SearchWrapper openSearch={openSearchInput}>
            <SearchBlock openSearch={openSearchInput}>
                <SearchIcon
                    onClick={onClickOpenSearchHandler}
                    openSearch={openSearchInput}
                />
                <input value={inputSearchValue}
                       onChange={onChangeSearchHandler}
                       type="text"
                       placeholder="Поиск книги или автора…"
                       onClick={onClickOpenSearchHandler}
                       data-test-id='input-search'
                />
                <button type="button" onClick={onClickCloseSearchHandler}>
                    <img src={searchClose}
                         data-test-id='button-search-close'
                         alt="searchClose"/>
                </button>
            </SearchBlock>
            <div>
                <SortBlock sort={sort}>
                    <button data-test-id='sort-rating-button' onClick={onClickSortHandler} type="submit">По рейтингу</button>
                    <img src={sortDown} alt="sortDown"/>
                </SortBlock>
                <SearchIconMobile
                    mediaWidth="590.98px"
                    width="32px"
                    height="32px"
                    onClick={onClickCloseSearchHandler}
                >
                    <img data-test-id='button-search-open'
                         src={searchMobile}
                         alt="searchMobile"/>
                </SearchIconMobile>
                <SearchIconMobile mediaWidth="590.98px" width="32px" height="32px">
                    <img src={filterMobile} alt="searchMobile"/>
                </SearchIconMobile>

            </div>
            <ViewBlock openSearch={openSearchInput}
                       onClick={onClick}>
                <BtnColumn isClick={view}/>
                <BtnList isClick={view}/>
            </ViewBlock>
        </SearchWrapper>
    )
}
