import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {Book} from '../../common/components/book';
import {Breadcrumbs} from '../../common/components/breadcrumbs';
import {Error} from '../../common/components/error';
import {Loader} from '../../common/components/loader';
import {useAppDispatch, useAppSelector} from '../../common/hooks/hooks';
import {getCardTC} from '../book-card/api/book-card-reducer';
import {BookWrapper} from "./style";


export const BooksPage = () => {
    const dispatch = useAppDispatch()
    const {bookId} = useParams()
    const book = useAppSelector(state => state.card)
    const statusLoading = useAppSelector(state => state.app.status)


    useEffect(() => {
        dispatch(getCardTC(bookId))
    }, [bookId, dispatch])

    if (statusLoading === 'loading') return <Loader/>

    return (
        <BookWrapper>
            <Breadcrumbs title={book.title}/>
            {statusLoading === 'error' ? <Error/> : <Book/>}
        </BookWrapper>
    )
}
