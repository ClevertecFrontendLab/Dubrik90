import React, {ChangeEvent, FC, useState} from 'react';

import {BtnColumn} from '../../../assets/img/action/column';
import filterMobile from '../../../assets/img/action/filter-mobile.svg';
import {BtnList} from '../../../assets/img/action/list';
import {SearchIcon} from '../../../assets/img/action/search-icon';
import searchMobile from '../../../assets/img/action/search-mobile.svg';
import searchClose from '../../../assets/img/action/searchClose.svg';
import sortDown from '../../../assets/img/action/sortDown.svg';

import {SearchBlock, SearchIconMobile, SearchWrapper, SortBlock, ViewBlock} from './style-seach';


type SearchPropsType = {
    view: boolean
    onClick: () => void
}
export const Search: FC<SearchPropsType> = ({onClick, view}) => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const [openSearch, setOpenSearch] = useState(true)

    const onClickOpenSearchHandler = () => {
        setOpenSearch(false)
    }
    const onClickCloseSearchHandler = () => {
        setOpenSearch(!openSearch)
    }

    return (
        <SearchWrapper openSearch={openSearch}>
            <SearchBlock openSearch={openSearch}>
                <SearchIcon
                    onClick={onClickOpenSearchHandler}/>
                <input value={value}
                       onChange={onChangeHandler}
                       type="text"
                       placeholder="Поиск книги или автора…"
                       onClick={onClickOpenSearchHandler}
                       data-test-id='input-search'
                />
                <button type="button" onClick={onClickCloseSearchHandler}>
                    <img src={searchClose}
                         data-test-id='button-search-close' alt="searchClose"/>
                </button>
            </SearchBlock>
            <div>
                <SortBlock>
                    <button type="submit">По рейтингу</button>
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
            <ViewBlock openSearch={openSearch}
                       onClick={onClick}>
                <BtnColumn isClick={view}/>
                <BtnList isClick={view}/>
            </ViewBlock>
        </SearchWrapper>
    )
}
