import styled from 'styled-components';

type ReviewsPropsType = {
    openReviews: boolean;
}

export const BooksAbout = styled.div`
    display: flex;
    column-gap: 30px;
    margin-bottom: 42px;
    @media (max-width: 520px) {
        flex-direction: column;
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
export const AboutBlock = styled.div`
    position: relative;
`
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
export const DetailedWrap = styled.div`
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
export const RatingWrapper = styled.div`
    margin-bottom: 62px;
    position: relative;
`;
export const ReviewsBlock = styled.div`
    position: relative;
`
export const ImgReview = styled.img<ReviewsPropsType>`
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({openReviews}) => openReviews ? 'rotate(-180deg)' : 'rotate(0)'};
`
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
