import styled from 'styled-components';
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
export const RatingWrapper = styled.div`
    margin-bottom: 62px;
    position: relative;
`;

