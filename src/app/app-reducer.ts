import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: InitialStateStateType = {
    isMenuOpen: false,
    isBurgerOpen: false,
    status: 'loading',
    error: null
}


const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsMenuOpenAC(state, action: PayloadAction<{ value: boolean }>) {
            return {...state, isMenuOpen: action.payload.value}
        },
        setIsBurgerOpenAC(state, action: PayloadAction<{ value: boolean }>) {
            return {...state, isBurgerOpen: action.payload.value}
        },
        setAppStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
            return {...state, status: action.payload.status}
        },
        setAppErrorAC(state, action: PayloadAction<{ error: string }>) {
            return {...state, error: action.payload.error}
        }
    }
})

type InitialStateStateType = {
    isMenuOpen: boolean,
    isBurgerOpen: boolean,
    status: RequestStatusType,
    error: string | null
}
export type RequestStatusType = 'idle' | 'loading' | 'error'

export const appReducer = slice.reducer
export const {setIsMenuOpenAC, setIsBurgerOpenAC, setAppStatusAC, setAppErrorAC} = slice.actions
