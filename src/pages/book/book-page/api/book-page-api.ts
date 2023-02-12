import axios, {AxiosResponse} from 'axios';

export const instance = axios.create({
    baseURL: 'https://strapi.cleverland.by/',
    withCredentials: true,
})

export const booksAPI = {
    getBooks() {
        return instance.get<'', AxiosResponse<BooksResType>>('api/books')
    }
}

export type BooksResType = BookType[]

export type BookType = {
    issueYear: string,
    rating: number | null,
    title: string,
    authors: string[],
    image: ImageType,
    categories: string[],
    id: number,
    booking: BookingType | null,
    delivery: DeliveryType | null,
    histories: HistoriesType[] | null
}

export type BookingType = {
    id: number,
    order: boolean,
    dateOrder: Date,
    customerId: number,
    customerFirstName: string,
    customerLastName: string
}
export type DeliveryType = {
    id: number,
    handed: boolean,
    dateHandedFrom: Date,
    dateHandedTo: Date,
    recipientId: number,
    recipientFirstName: string,
    recipientLastName: string
}
export type ImageType = {
    url: string
}
export type HistoriesType = {
    id: number,
    userId: number
}
