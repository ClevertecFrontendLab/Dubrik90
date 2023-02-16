// eslint-disable-next-line import/no-extraneous-dependencies
import thunkMiddleware from 'redux-thunk';
import {AnyAction, combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit';

import {cardReducer} from '../pages/book-card/api/book-card-reducer';
import {booksReducer} from '../pages/book-page/api/book-page-reducer';

import {appReducer} from './app-reducer';

const rootReducer = combineReducers({
    app: appReducer,
    books: booksReducer,
    card: cardReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
>
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.store = store;




