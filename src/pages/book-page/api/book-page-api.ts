import axios, {AxiosResponse} from 'axios';
import {URL} from '../../../constans/url';
import {BooksResType, CardResType, CategoriesResType} from '../../../types/types';

export const instance = axios.create({
    baseURL: URL.baseURL,
    withCredentials: true,
})
export const booksAPI = {
    getBooks() {
        return instance.get<'', AxiosResponse<BooksResType>>('/books')
    },
    getCategories() {
        return instance.get<'', AxiosResponse<CategoriesResType>>('/categories')
    },
    getCard(id: string) {
        return instance.get<'', AxiosResponse<CardResType>>(`/books/${id}`)
    }
}


