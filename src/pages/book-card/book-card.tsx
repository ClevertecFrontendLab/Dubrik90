import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import imageNone from '../../common/components/swiper/assets/imageNone.png'
import {StyledButton} from '../../common/components/button/styled-button';
import {Raring} from '../../common/components/rating/raring';
import {BookWrapper, ImageBlock, RatingWrapper, SubTitleBook, TitleBook} from './book-card-style';
import {BookType} from "../../types/types";


type BookCardPropsType = {
    book: BookType
    isOpen: boolean
    category: string | undefined
}

export const BookCard: FC<BookCardPropsType> = (
    {
        book,
        isOpen,
        category
    }) => (
    <Link data-test-id="card"
          to={`/books/${category}/${book.id}`}>
        <BookWrapper isOpen={isOpen}>
            <ImageBlock isOpen={isOpen}>
                {
                    book.image
                        ? <img src={`https://strapi.cleverland.by${book.image.url}`}
                               alt="Logo"/>
                        : <img src={imageNone} alt="Logo"/>
                }
            </ImageBlock>
            <RatingWrapper isOpen={isOpen}>
                <Raring rating={book.rating}/>
            </RatingWrapper>
            <TitleBook isOpen={isOpen}>
                {book.title}
            </TitleBook>
            <SubTitleBook isOpen={isOpen}>
                {book.authors} {book.issueYear}
            </SubTitleBook>
            <StyledButton
                isBooked={book.booking?.order}
                isOpen={isOpen}
            >
                {book.booking?.order ? 'ЗАБРОНИРОВАТЬ' : 'занята до 03.05'}
            </StyledButton>
        </BookWrapper>
    </Link>
)



