import axios, {AxiosResponse} from 'axios';

import {
    BookingType,
    DeliveryType,
    HistoriesType,
    ImageType, instance
} from '../../book-page/api/book-page-api';

export const booksAPI = {
    getCard(id?: string) {
        return instance.get<'', AxiosResponse<CardResType>>(`api/books/${id}`)
    }
}

export type CardResType = CardType[]

export type CardType = {
    id: number,
    title: string,
    rating: number,
    issueYear: string,
    description: string,
    publish: string,
    pages: string,
    cover: string,
    weight: string,
    format: string,
    ISBN: string,
    producer: string,
    authors: string[],
    images: ImageType[],
    categories: string[],
    comments: CommentsType[],
    booking: BookingType | null,
    delivery: DeliveryType | null,
    histories: HistoriesType[] | null
}
type CommentsType = {
    id: number,
    rating: number,
    text: string,
    createdAt: string,
    user: UserType
}

type UserType = {
    commentUserId: number,
    firstName: string,
    lastName: string,
    avatarUrl: string
}
