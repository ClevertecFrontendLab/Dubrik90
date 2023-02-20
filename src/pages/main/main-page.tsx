import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {Loader} from '../../common/components/loader';
import {Error} from '../../common/components/error';
import {Search} from '../../common/components/search';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import {BookCardWrapper} from '../../styled/book-card-wrapper/styled-book-cardw-wrapper';
import {BookPageStyle} from '../../styled/main-styled';
import {BookCard} from '../book-card';
import {getBooksTC} from '../book-page/api/book-page-reducer';
import {BookType} from '../../types/types';


export const MainPage = () => {
    const {category} = useParams()
    const dispatch = useAppDispatch()
    const books = useAppSelector(state => state.books.books)
    const initialize = useAppSelector(state => state.books.initialize)
    const statusLoading = useAppSelector(state => state.app.status)
    const categories = useAppSelector(state => state.books.categories)
    let activeCategory: any = [];

    const [view, setView] = useState<boolean>(true);

    useEffect(() => {
        dispatch(getBooksTC())
    }, [dispatch])

    if (categories.length !== 0 && category !== 'all') {
        activeCategory = categories.filter(el => (el.path === category))[0].name
    }

    const activeBooks = category === 'all' ? books : books.filter(el => (el.categories).includes(activeCategory))

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
            <BookCardWrapper view={view}>
                {
                    activeBooks.map((el: BookType) => (
                        <BookCard book={el}
                                  key={el.id}
                                  isOpen={view}
                                  category={category}
                        />
                    ))
                }
            </BookCardWrapper>
        </BookPageStyle>
    )
};






