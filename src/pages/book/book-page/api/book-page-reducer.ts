import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import {AxiosError} from 'axios';
import {AppThunk} from '../../../../app/store';
import {booksAPI, BooksResType} from './book-page-api';
import {setAppStatusAC} from '../../../../app/app-reducer';

type InitialStateType = {
    initialize: boolean,
    books: BooksResType
}

const initialState: InitialStateType = {
    initialize: false,
    books: []
}


const slice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooksAC(state, action: PayloadAction<BooksResType>) {
            return {...state,books: [...action.payload]}
        },
        setUpdateDeskAC(state, action: PayloadAction<{initialize: boolean}>) {
            return {...state, ...action.payload}
        }
    }
})


export const getBooksTC = (): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const res = await booksAPI.getBooks()

        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        dispatch(setBooksAC(res.data))

    } catch (e) {
        const err = e as Error | AxiosError
        alert(err)
    } finally {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        dispatch(setUpdateDeskAC({initialize: true}))
        dispatch(setAppStatusAC({status: 'idle'}))
       // dispatch(getCardsAC({initialize: true}))
    }
}

export const booksReducer = slice.reducer
export const {setBooksAC, setUpdateDeskAC} = slice.actions
