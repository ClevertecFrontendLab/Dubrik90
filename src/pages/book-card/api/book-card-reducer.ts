import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';

import {setAppStatusAC} from '../../../app/app-reducer';
import {AppThunk} from '../../../app/store';
import {booksAPI, CardResType, CardType} from '../../book-page/api/book-page-api';


const initialState: CardType = {
    id: 0,
    title: '',
    rating: 0,
    issueYear: '',
    description: '',
    publish: '',
    pages: '',
    cover: '',
    weight: '',
    format: '',
    ISBN: '',
    producer: '',
    authors: [],
    images: [
        {
            url: ''
        }
    ],
    categories: [],
    comments: [
        {
            id: 0,
            rating: 0,
            text: '',
            createdAt: '',
            user: {
                commentUserId: 0,
                firstName: '',
                lastName: '',
                avatarUrl: ''
            }
        }
    ],
    booking: null,
    delivery: null,
    histories: null
}

const slice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setCardAC(state, action: PayloadAction<CardResType>) {
            return {...state, ...action.payload}
        },
    }
})

export const {setCardAC} = slice.actions

export const getCardTC = (idBook?: string): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const id = idBook ? idBook : '';
        const res = await booksAPI.getCard(id)

        dispatch(setCardAC(res.data))
        dispatch(setAppStatusAC({status: 'idle'}))
    } catch (e) {
        const err = e as Error | AxiosError

        dispatch(setAppStatusAC({status: 'error'}))
    }
}

export const cardReducer = slice.reducer

type ErrorResType = {
    data: null;
    error: {
        status: number;
        name: string;
        message: string;
        details: object
    }
}
