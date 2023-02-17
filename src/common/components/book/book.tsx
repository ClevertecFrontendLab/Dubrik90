import React, {useState} from 'react';

import arrowReviews from '../../../assets/img/action/arrow-reviews.svg';
import ellipse from '../../../assets/img/Ellipse.png';
import {CommentsType} from '../../../pages/book-page/api/book-page-api';
import {
    AboutBlock,
    BookButton,
    BookInfoWrap,
    BooksAbout,
    DescriptionBook,
    DeskBlock,
    Detailed,
    Detailedwrap,
    ImgReview,
    Rating,
    Reviews,
    ReviewsBlock,
    ReviewsWrap,
    SwiperWrapper,
    TitleRating
} from '../../../pages/book-page/book-page-style';
import {Container} from '../../../styled/styled-wpapper';
import {useAppSelector} from '../../hooks/hooks';
import {Raring} from '../rating/raring';
import {SwiperSlider} from '../swiper/slider-swiper';

export const Book = () => {
    const book = useAppSelector(state => state.card)

    const [openReviews, setOpenReviews] = useState(false)
    const onClickOpenHandler = () => {
        setOpenReviews(!openReviews)
    }

    return (
        <Container>
            <BooksAbout>
                <SwiperWrapper>
                    <SwiperSlider image={book.images}/>
                </SwiperWrapper>
                <DescriptionBook>
                    <p>{book.title}</p>
                    <span>{book.authors[0]}, {book.issueYear}</span>
                    <BookButton type="button">Забронировать</BookButton>
                    <DeskBlock>
                        <p>О книге</p>
                        <p>{book.description}</p>
                    </DeskBlock>
                </DescriptionBook>
            </BooksAbout>
            <BookInfoWrap>
                <Rating>
                    <TitleRating>
                        Рейтинг
                    </TitleRating>
                    <Raring rating={book.rating}/>
                </Rating>
                <AboutBlock>
                    <TitleRating>
                        Подробная информация
                    </TitleRating>
                    <Detailed>
                        <Detailedwrap>
                            <div>
                                <span>Издательство</span> <p>{book.publish}</p>
                            </div>
                            <div>
                                <span>Год издания</span> <p>{book.issueYear}</p>
                            </div>
                            <div>
                                <span>Страниц</span> <p>{book.pages}</p>
                            </div>
                            <div>
                                <span>Переплёт</span> <p>{book.cover}</p>
                            </div>
                            <div>
                                <span>Формат</span> <p>{book.format}</p>
                            </div>
                        </Detailedwrap>
                        <Detailedwrap>
                            <div>
                                <span>Жанр</span> <p>{book.categories[0]}</p>
                            </div>
                            <div>
                                <span>Вес</span> <p>{book.weight} г</p>
                            </div>
                            <div>
                                <span>ISBN</span> <p>{book.ISBN}</p>
                            </div>
                            <div>
                                <span>Изготовитель</span>
                                <p>{book.producer}</p>
                            </div>
                        </Detailedwrap>
                    </Detailed>
                </AboutBlock>
                <ReviewsBlock>
                    <TitleRating onClick={onClickOpenHandler}>
                        <p>
                            Отзывы
                            <span>
                                {book.comments ? book.comments.length : '0'}
                            </span>
                        </p>
                        <ImgReview onClick={onClickOpenHandler}
                                   src={arrowReviews}
                                   data-test-id='button-hide-reviews'
                                   openReviews={openReviews}
                                   alt="arrowReviews"/>
                    </TitleRating>
                    <Reviews openReviews={openReviews}>
                        {book.comments?.map((el: CommentsType) => (
                            <ReviewsWrap key={el.id}>
                                <div>
                                    {el.user.avatarUrl
                                        ? <img
                                            src={`https://strapi.cleverland.by${el.user.avatarUrl}`}
                                            alt="Logo"/>
                                        : <img src={ellipse} alt="ellipse"/>
                                    }
                                    <p>{`${el.user.firstName} ${el.user.lastName}`}</p>
                                    <p>{el.createdAt}</p>
                                </div>
                                <Raring rating={el.rating}/>
                                <p>{el.text}</p>
                            </ReviewsWrap>
                        ))}
                    </Reviews>
                    <BookButton data-test-id='button-rating'>оценить книгу</BookButton>
                </ReviewsBlock>
            </BookInfoWrap>
        </Container>
    );
};

