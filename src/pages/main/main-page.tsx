import React, {useEffect, useMemo, useState} from 'react';
import {useParams} from 'react-router-dom';

import {Loader} from '../../common/components/loader';
import {Error} from '../../common/components/error';
import {Search} from '../../common/components/search';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import {BookCardWrapper, NotBook} from '../../styled/book-card-wrapper/styled-book-cardw-wrapper';
import {BookPageStyle} from '../../styled/main-styled';
import {BookCard} from '../book-card';
import {getBooksTC} from '../book-page/api/book-page-reducer';
import {BookType} from '../../types/types';
import {sortRatingBooks} from '../../common/hooks/sort-rating';


export const MainPage = () => {
    const {category} = useParams()
    const dispatch = useAppDispatch()
    const [view, setView] = useState<boolean>(true);
    const booksAPP = useAppSelector(state => state.books.books)
    const sortDown = useAppSelector(state => state.books.sortDown)
    const statusLoading = useAppSelector(state => state.app.status)
    const categories = useAppSelector(state => state.books.categories)
    const books = sortRatingBooks(booksAPP, sortDown)

    const inputSearchValue = useAppSelector(state => state.books.searchBook)

    const activeCategory = categories.find((el) => el.path === category);

    useEffect(() => {
        dispatch(getBooksTC())
    }, [dispatch])

    const filterCategoryBook = useMemo(
        () =>
            category === 'all' || !activeCategory
                ? books
                : books.filter((el) => el.categories.includes(activeCategory.name)),
        [category, books, activeCategory]
    );

    let filterBook = filterCategoryBook;

    if (inputSearchValue !== '') {
        filterBook = filterCategoryBook.filter(el => el.title.toLowerCase().includes(inputSearchValue.toLowerCase()))
    }
    const onClickHandler = () => {
        setView(!view)
    }

    if (statusLoading === 'loading') return <Loader/>
    if (statusLoading === 'error') return <Error/>

    return (
        <BookPageStyle>
            <Search view={view}
                    onClick={onClickHandler}
            />
            <BookCardWrapper view={view} notFound={!!filterBook.length}>
                {filterBook.length > 0
                    ? filterBook.map((el: BookType) => (
                        <BookCard book={el}
                                  key={el.id}
                                  isOpen={view}
                                  category={category}
                        />
                    ))
                    : <NotBook data-test-id={filterCategoryBook.length === 0 ? 'empty-category' : 'search-result-not-found'}>
                        {filterCategoryBook.length === 0 ? 'В этой категории книг ещё нет' : 'По запросу ничего не найдено'}
                    </NotBook>
                }
            </BookCardWrapper>
        </BookPageStyle>
    )
};






