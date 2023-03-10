
// Books
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

// Categories
export type CategoriesResType = CategoriesType[]
export type CategoriesType = {
    name: string,
    path: string,
    id: number,

}

// Book
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
export type CommentsType = {
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

// Error
export type ErrorResType = {
    data: null;
    error: {
        status: number;
        name: string;
        message: string;
        details: object
    }
}
