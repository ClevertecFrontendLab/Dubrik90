import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {AxiosError} from 'axios';
import {AppThunk} from '../../../../app/store';
import {booksAPI, CardResType, CardType} from './book-card-api';
import {setAppStatusAC} from '../../../../app/app-reducer';

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


export const getCardTC = (idBook?: string): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const id = idBook ? idBook : '';
        const res = await booksAPI.getCard(id)
        console.log(res.data)
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        dispatch(setCardAC(res.data))

    } catch (e) {
        const err = e as Error | AxiosError
        alert(err)
    } finally {
        dispatch(setAppStatusAC({status: 'idle'}))
       // dispatch(getCardsAC({initialize: true}))
    }
}

export const cardReducer = slice.reducer
export const {setCardAC} = slice.actions
