import styled from 'styled-components';


type DivStyledPropsType = {
    view: boolean,
    notFound: boolean
}
export const NotBook = styled.div`
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.1px;
    color: #A7A7A7;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
`
export const BookCardWrapper = styled.div<DivStyledPropsType>`
    display: ${({view}) => view ? 'grid' : 'flex'};
    flex-direction: column;
    grid-template-columns: ${({notFound}) => notFound ? 'repeat(4, 1fr)' : 'repeat(1, 1fr)'};
    height: 100%;
    gap: 16px;
    flex-grow: 1;
    @media (max-width: 1050px) {
        grid-template-columns: repeat(3, 1fr);
        gap: ${({view}) => view && '35px'};
    }
    @media (max-width: 911px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    @media (max-width: 840px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 35px;
        justify-content: space-around;
    }

    a {
        display: ${({view}) => view && 'flex'};
        @media (max-width: 840px) {
            flex-grow: 1;
            justify-content: center;
        }
    }
`
