import {BooksResType} from '../../types/types';

export const sortRatingBooks = (books: BooksResType, sortDown: boolean) => [...books].sort((a, b) => {
    const x = a.rating === null ? 0 : a.rating
    const y = b.rating === null ? 0 : b.rating

    return sortDown ? x - y : y - x
})

