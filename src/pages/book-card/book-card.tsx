import React, {FC, useCallback} from 'react';
import {Link} from 'react-router-dom';

import imageNone from '../../common/components/swiper/assets/imageNone.png'
import {StyledButton} from '../../common/components/button/styled-button';
import {Raring} from '../../common/components/rating/raring';
import {CardWrapper, ImageBlock, RatingCardWrapper, SubTitleCard, TitleCard} from './style';
import {BookType} from "../../types/types";
import {useAppSelector} from "../../common/hooks/hooks";
import {HightLight} from "../../common/components/hight-light";


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
    }) => {
    const inputSearchValue = useAppSelector(state => state.books.searchBook)

    const light = useCallback((str: string) => <HightLight filter={inputSearchValue}
                                                           str={str}/>, [inputSearchValue])

    return (
        <Link data-test-id="card"
              to={`/books/${category}/${book.id}`}>
            <CardWrapper isOpen={isOpen}>
                <ImageBlock isOpen={isOpen}>
                    {
                        book.image
                            ? <img src={`https://strapi.cleverland.by${book.image.url}`}
                                   alt="Logo"/>
                            : <img src={imageNone} alt="Logo"/>
                    }
                </ImageBlock>
                <RatingCardWrapper isOpen={isOpen}>
                    <Raring rating={book.rating}/>
                </RatingCardWrapper>
                <TitleCard isOpen={isOpen}>
                    {light(book.title)}
                </TitleCard>
                <SubTitleCard isOpen={isOpen}>
                    {book.authors} {book.issueYear}
                </SubTitleCard>
                <StyledButton
                    isBooked={book.booking?.order}
                    isOpen={isOpen}
                >
                    {book.booking?.order ? 'ЗАБРОНИРОВАТЬ' : 'занята до 03.05'}
                </StyledButton>
            </CardWrapper>
        </Link>
    )

}



