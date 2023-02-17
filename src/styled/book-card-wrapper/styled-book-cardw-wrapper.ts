import styled from 'styled-components';


type DivStyledPropsType = {
    view: boolean
}
export const BookCardWrapper = styled.div<DivStyledPropsType>`
    display: ${({view}) => view ? 'grid' : 'flex'};
    flex-direction: column;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
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
        //display: flex;
        @media (max-width: 840px) {
            flex-grow: 1;
            justify-content: center;
        }
    }
`
