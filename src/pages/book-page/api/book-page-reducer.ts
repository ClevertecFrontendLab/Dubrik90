import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';

import {setAppStatusAC} from '../../../app/app-reducer';
import {AppThunk} from '../../../app/store';
import {BooksResType, CategoriesResType} from '../../../types/types';

import {booksAPI} from './book-page-api';


type InitialStateType = {
    initialize: boolean,
    categories: CategoriesResType
    books: BooksResType
    sortDown: boolean
    searchBook: string
}

const initialState: InitialStateType = {
    initialize: false,
    categories: [],
    books: [],
    sortDown: false,
    searchBook: ''
}


const slice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooksAC(state, action: PayloadAction<BooksResType>) {
            return {...state, books: [...action.payload]}
        },
        setInitializeAC(state, action: PayloadAction<{ initialize: boolean }>) {
            return {...state, ...action.payload}
        },
        setCategoriesAC(state, action: PayloadAction<CategoriesResType>) {
            return {...state, categories: [...action.payload]}
        },
        setSortDownAC(state) {
            return {...state, sortDown: !state.sortDown}
        },
        setSearchBookAC(state,action: PayloadAction<{ searchValue: string }>) {
            return {...state, searchBook: action.payload.searchValue}
        }
    }
})

export const booksReducer = slice.reducer
export const {setBooksAC, setInitializeAC, setCategoriesAC, setSortDownAC, setSearchBookAC} = slice.actions

export const getCategoriesTC = (): AppThunk => async (dispatch) => {
    // dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await booksAPI.getCategories()

        dispatch(setCategoriesAC(res.data))
    } catch (e) {
        const err = e as Error | AxiosError

        dispatch(setAppStatusAC({status: 'error'}))
    } finally {
        dispatch(setInitializeAC({initialize: true}))
    }
}


export const getBooksTC = (): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC({status: 'loading'}))
    try {
        dispatch(getCategoriesTC())
        const res = await booksAPI.getBooks()

        dispatch(setBooksAC(res.data))
        dispatch(setAppStatusAC({status: 'idle'}))
    } catch (e) {
        const err = e as Error | AxiosError

        dispatch(setAppStatusAC({status: 'error'}))
    } finally {
        dispatch(setInitializeAC({initialize: true}))

    }
}




