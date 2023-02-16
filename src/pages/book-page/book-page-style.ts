import styled from 'styled-components';

export const BreadcrumbsWrapper = styled.div`
    background: #F9F9FA;
    padding: 23px 0;
    margin-bottom: 42px;
`
export const BreadcrumbsBlock = styled.div`
    display: flex;
    column-gap: 8px;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.1px;
    color: #A7A7A7;
`

export const Category = styled.div`
    :after {
        content: '/';
        width: 2px;
        padding-left: 10px;
    }
`
export const BookName = styled.div`
`
export const BooksAbout = styled.div`

    display: flex;
    column-gap: 30px;
    margin-bottom: 42px;
    @media (max-width: 520px) {
        flex-direction: column;
    }
    // display: grid;
    //grid-template-columns: 494px 1fr;

    //
    //    grid-template-columns: 300px 1fr;
    //}
    // column-gap: 30px;
    // flex-direction: column;
    // max-width: 445px;
    // row-gap: 16px;

    // min-width: 0;
    // @media (max-width: 496px) {
    //     flex-direction: column;
    //     align-items: center;
    // }
`;
export const BockImage = styled.div`
    flex: 0 0 445px;

    img {
        width: 100%;
        object-fit: cover;
        object-position: bottom;
    }

    @media (max-width: 1144px) {
        flex: 0 0 245px;
    }
    @media (max-width: 768px) {
        flex: 0 0 130px;
    }
    @media (max-width: 350px) {
        max-width: 188px;
        margin-bottom: 16px;
    }
`

export const BookInfoWrap = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        margin-bottom: 32px;
        font-weight: 700;
        font-size: 18px;
        line-height: 156%;
        color: #363636;
    }
`;


export const Rating = styled.div`
    margin-bottom: 62px;
    position: relative;
`;

export const TitleRating = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    column-gap: 24px;

    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.1px;
    color: #363636;
    margin-bottom: 32px;

    span {
        padding-left: 5px;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0.1px;
        color: #A7A7A7;
    }

    :after {
        content: '';
        width: 350px;
        height: 1px;
        background: #EBEBEB;
        position: absolute;
        top: 40px;
        left: 0;
    }
`
export const Detailed = styled.div`
    display: flex;
    column-gap: 146px;
    margin-bottom: 62px;
    @media (max-width: 1144px) {
        column-gap: 60px;
    }
    @media (max-width: 768px) {
        margin-bottom: 52px;
    }
    @media (max-width: 750px) {
        flex-wrap: wrap;
    }
`;


export const Detailedwrap = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;

    div {
        display: flex;
        column-gap: 70px;
        @media (max-width: 1144px) {
            column-gap: 30px;
        }

        span {
            min-width: 118px;
            font-weight: 600;
            font-size: 16px;
            line-height: 150%;
            letter-spacing: 0.1px;
            color: #A7A7A7;
        }
    }

    p {
        min-width: 150px;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.1px;
        color: #363636;
    }
`;
export const ReviewsBlock = styled.div`
    position: relative;
`
type ReviewsPropsType = {
    openReviews: boolean;
}
export const Reviews = styled.div<ReviewsPropsType>`
    display: flex;
    flex-direction: column;
    row-gap: 42px;
    max-width: 730px;
    position: ${({openReviews}) => openReviews ? 'relative' : 'fixed'};
    left: ${({openReviews}) => openReviews ? '0' : '-100%'};
    opacity: ${({openReviews}) => openReviews ? '1' : '0'};
    visibility: ${({openReviews}) => openReviews ? 'visible' : 'hidden'};
`

export const ImgReview = styled.img<ReviewsPropsType>`
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({openReviews}) => openReviews ? 'rotate(-180deg)' : 'rotate(0)'};


`
export const ReviewsWrap = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;

    div {
        display: flex;
        column-gap: 24px;
        align-items: center;

        p {
            font-weight: 400;
            font-size: 16px;
            letter-spacing: 0.1px;
            color: #727272;
        }

        img {
            width: 32px;
        }
    }

    img {
        width: 150px;
    }

    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.1px;
        color: #363636;
    }
`;

export const BookButton = styled.button`
    align-self: flex-start;
    display: block;
    background: linear-gradient(233.73deg, #F83600 -16.08%, #F9D423 327.37%);
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    min-width: 350px;
    letter-spacing: 0.2px;
    border-radius: 30px;
    padding: 14px 101px;
    margin-top: 32px;
    color: #fff;
    margin-bottom: 62px;
    text-transform: uppercase;
    @media (max-width: 768px) {
        padding: 14px 79px;
        margin-bottom: 48px;
        min-width: auto;
        align-self: stretch;
    }
    @media (max-width: 520px) {
        width: 100%;
    }
    @media (max-width: 350px) {
        padding: 14px 40px;
        margin-bottom: 42px;
        width: 100%;

    }

    :hover {
        background: linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);
    }
`;
export const DescriptionBook = styled.div`
    p {
        font-weight: 700;
        font-size: 32px;
        line-height: 125%;
        letter-spacing: 0.1px;
        color: #363636;
        margin-bottom: 24px;
        @media (max-width: 768px) {
            font-size: 24px;
        }
        @media (max-width: 350px) {
            font-size: 18px;
        }
    }

    span {
        font-weight: 700;
        font-size: 18px;
        line-height: 156%;
        letter-spacing: 0.1px;
        color: #A7A7A7;
        margin-bottom: 32px;
        @media (max-width: 768px) {
            font-size: 14px;
        }
    }

`;
export const DeskBlock = styled.div`
    p:nth-child(1) {
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 0.1px;
        color: #363636;
        margin-bottom: 32px;
        @media (max-width: 768px) {
            margin-left: -155px;
        }
        @media (max-width: 520px) {
            margin-left: 0;
        }
    }

    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.1px;
        color: #363636;
        @media (max-width: 768px) {
            margin-left: -155px;
        }
        @media (max-width: 520px) {
            flex-direction: column;
            margin-left: 0;
        }
`

export const AboutBlock = styled.div`
    position: relative;
`


export const SwiperWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    @media (max-width: 520px) {
        align-self: center;
    }

    .swiper {
        width: 100%;
        height: 100%;
        // max-height: 594px;
    }

    .swiper-slide img {
        display: block;
        max-width: 100%;
        height: 100%;
        object-position: center;
    }

    // .swiper {
    ////     width: 100%;
    // }

    //.swiper-slide {
    //    height: 100%;
    //    overflow: hidden;
    //    background-size: cover;
    //    background-position: center;
    //}

    .mySwiper2 {
        height: 80%;
        width: 100%;
        margin-bottom: 20px;
    }

    .mySwiper {
        height: 20%;
        box-sizing: border-box;
        padding: 10px 0;

    }

    .mySwiper .swiper-wrapper {
        width: 350px;
        height: 86px;
    }

    .mySwiper .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
    }

    .mySwiper .swiper-slide-thumb-active {
        opacity: 1;
    }

    ////////////////

    .swiper, swiper-container {
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
        display: block
    }

    .swiper-vertical > .swiper-wrapper {
        flex-direction: column
    }

    .swiper-wrapper {
        position: relative;
        width: 494px;
        height: 594px;
        z-index: 1;
        display: flex;
        transition-property: transform;
        transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
        box-sizing: content-box;
        @media (max-width: 943px) {
            max-width: 300px;
            height: 400px;
        }
        @media (max-width: 768px) {
            max-width: 136px;
            height: 198px;
        }
        @media (max-width: 520px) {
            max-width: 188px;
            height: 260px;
        }
    }

    .swiper.swiper-thumbs {
        width: 300px;
        @media (max-width: 768px) {
            display: none;
            visibility: hidden;
        }
    }


    .swiper-android .swiper-slide, .swiper-wrapper {
        transform: translate3d(0px, 0, 0)
    }

    .swiper-horizontal {
        touch-action: pan-y
    }

    .swiper-vertical {
        touch-action: pan-x
    }

    .swiper-slide {
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        position: relative;
        transition-property: transform;
        display: block
    }

    .swiper-backface-hidden .swiper-slide {
        transform: translateZ(0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden
    }

    .swiper-lazy-preloader {
        width: 42px;
        height: 42px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -21px;
        margin-top: -21px;
        z-index: 10;
        transform-origin: 50%;
        box-sizing: border-box;
        border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
        border-radius: 50%;
        border-top-color: transparent
    }

    .swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader, .swiper:not(.swiper-watch-progress) .swiper-lazy-preloader, swiper-container:not(.swiper-watch-progress) .swiper-lazy-preloader {
        //  animation: swiper-preloader-spin 1s infinite linear
    }

    .swiper-lazy-preloader-white {
        --swiper-preloader-color: #fff;
    }

    .swiper-lazy-preloader-black {
        --swiper-preloader-color: #000
    }

    @keyframes swiper-preloader-spin {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }

    @media (max-width: 768px) {
        .swiper-pagination {
            padding: 8px 0;
            text-align: center;
            transition: .3s opacity;
            transform: translate3d(0, 0, 0);
            z-index: 10
        }

        .swiper-pagination.swiper-pagination-hidden {
            opacity: 0
        }

        .swiper-pagination-bullet {
            width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
            height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
            display: inline-block;
            border-radius: 50%;
            background: var(--swiper-pagination-bullet-inactive-color, #BFC4C9);
        }

        .swiper-pagination-clickable .swiper-pagination-bullet {
            cursor: pointer
        }


        .swiper-pagination-bullet-active {
            background: #363636;
        }

        .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
            margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px)
        }

        .swiper-pagination-lock {
            display: none
        }

    }

`
