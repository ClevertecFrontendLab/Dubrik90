import styled from 'styled-components';


export const TextStyle = styled.p`
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.1px;
`
type PropsCardType = {
    isOpen: boolean
}
export const CardWrapper = styled.div<PropsCardType>`
    background: #FFFFFF;
    box-shadow: 0 2px 4px rgba(191, 196, 201, 0.2), 0 3px 4px rgba(191, 196, 201, 0.18), 0 1px 5px rgba(191, 196, 201, 0.24);
    border-radius: 10px;
    padding: 8px 8px 16px 8px;

    display: ${({isOpen}) => isOpen ? 'flex' : 'grid'};
    flex-direction: column;
    grid-template-columns: ${({isOpen}) => !isOpen && '120px 1fr auto'};
    grid-template-areas: ${({isOpen}) => !isOpen &&
        '"img title title" ' +
        '"img subTitle subTitle" ' +
        '"img rating button"'};
    column-gap: ${({isOpen}) => !isOpen && '16px'};
    row-gap: ${({isOpen}) => isOpen ? '16px' : '0'};


    @media (max-width: 1050px) {
        max-width: ${({isOpen}) => isOpen && '190px'};
    }
    @media (max-width: 597px) {
        min-width: 288px;
    }
    @media (max-width: 530px) {
        grid-template-areas: ${({isOpen}) => !isOpen &&
            '"img title title" ' +
            '"img subTitle subTitle" ' +
            '"img rating rating" ' +
            '"img button button"'};
    }
    @media (max-width: 380px) {
        grid-template-columns: ${({isOpen}) => !isOpen && '70px 1fr auto'};
    }

`

export const ImageBlock = styled.div<PropsCardType>`
    grid-area: img;
    overflow: hidden;
    position: relative;
    padding: 0 0 140% 0;
    min-height: ${({isOpen}) => isOpen ? '250px' : 'auto'};
    @media (max-width: 380px) {
        padding: 0 0 100% 0;
    }
    img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    @media (max-width: 380px) {
        align-self: ${({isOpen}) => !isOpen && 'start'};
    }
`
export const RatingCardWrapper = styled.div<PropsCardType>`
    grid-area: rating;
    align-self: ${({isOpen}) => !isOpen && 'end'};
    @media (max-width: 530px) {
        margin-bottom: ${({isOpen}) => !isOpen && '16px'};
    }
`
export const TitleCard = styled(TextStyle)<PropsCardType>`
    grid-area: title;
    flex: 1 1 auto;
    margin-bottom: ${({isOpen}) => isOpen && '12px'};
    color: #363636;
    font-size: ${({isOpen}) => !isOpen && '24px'};
    font-weight: 700;
    line-height: ${({isOpen}) => !isOpen && '30px'};
    align-self: ${({isOpen}) => !isOpen && 'center'};
    @media (max-width: 590px) {
        font-size: ${({isOpen}) => !isOpen && '14px'};
        line-height: ${({isOpen}) => !isOpen && '18px'};
    }

`
export const SubTitleCard = styled(TextStyle)<PropsCardType>`
    grid-area: subTitle;
    color: #727272;
    font-size: ${({isOpen}) => !isOpen && '16px'};
    @media (max-width: 380px) {
        font-size: ${({isOpen}) => !isOpen && '12px'};

    }
`

