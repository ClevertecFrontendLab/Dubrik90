import styled from 'styled-components';

import {PropsImageType} from '../../../styled/image-wrapper';

export const SearchWrapper = styled.div<SearchBlockPropsType>`
    display: flex;
    max-height: 38px;
    width: 100%;
    align-items: center;
    column-gap: 16px;
    margin-bottom: 32px;
    position: relative;
    @media (max-width: 590px) {
        column-gap: 0;
    }

    div:nth-child(2) {
        @media (max-width: 590px) {
            display: ${({openSearch}) => openSearch ? 'flex' : 'none'};

        }

        transition: all 0.3s;
        flex: 1 1 auto;
    }
`

type SearchBlockPropsType = {
    openSearch: boolean
}
export const SearchBlock = styled.div<SearchBlockPropsType>`
    position: relative;
    display: flex;
    flex-direction: column;
    transition: all 0.3s;

    @media (max-width: 590px) {
        width: ${({openSearch}) => openSearch ? 'auto' : '100%'};
    }

    button {
        @media (max-width: 590px) {

        }
        opacity: ${({openSearch}) => openSearch ? '0' : '1'};
        width: 16px;
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        transition: opacity 0.3s;
        z-index: 50;
    }


    input {
        max-width: 350px;
        max-height: 36px;
        padding: 10px 40px;
        box-shadow: 0 2px 4px rgba(191, 196, 201, 0.2), 0 3px 4px rgba(191, 196, 201, 0.18), 0 1px 5px rgba(191, 196, 201, 0.24);
        border-radius: 599px;
        overflow: hidden;
        border: none;
        caret-color: #F83600;
        transition: all 0.3s;
        @media (max-width: 590px) {
            max-width: ${({openSearch}) => openSearch ? '45px' : '100%'};
            //max-width: 45px;
            padding: ${({openSearch}) => openSearch ? '4px 22px' : '4px 40px'};
            display: ${({openSearch}) => !openSearch ? 'flex' : 'none'};
        }

        ::placeholder {
            font-size: 14px;
            line-height: 18px;
            color: #A7A7A7;
        }
    }

    svg {
        position: absolute;
        top: 50%;
        left: 16px;
        transform: translateY(-50%);

        @media (max-width: 590px) {
            display: ${({openSearch}) => !openSearch ? 'flex' : 'none'};
         }

        path {
            transition: fill 0.3s;
        }
    }


    input:focus ~ svg {
        path {
            fill: #F83600;
        }
    }
`

export const SearchIconMobile = styled.div<PropsImageType>`
    display: flex;
    flex: 0 0 50%;
    text-align: center;
    max-width: ${({width}) => width || '96px'};
    max-height: ${({height}) => height || '96px'};
    border-radius: ${({borderRadius}) => borderRadius || '100%'};
    transition: all 0.3s;
    @media (min-width: ${({mediaWidth}) => `${mediaWidth}`}) {
        display: none;
    }

    :hover {
        scale: ${({hover}) => hover ? '1.1' : '1'};
    }

    img {
        width: 100%;
        object-fit: cover;
        border-radius: ${({borderRadius}) => borderRadius || '100%'};
        justify-content: center;
        cursor: pointer;
    }
`
export const SortBlock = styled.div`
    position: relative;
    padding: 10px 16px 10px 40px;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.1px;
    color: #A7A7A7;
    box-shadow: 0 2px 4px rgba(191, 196, 201, 0.2), 0 3px 4px rgba(191, 196, 201, 0.18), 0 1px 5px rgba(191, 196, 201, 0.24);
    border-radius: 30px;
    width: 150px;
    cursor: pointer;

    @media (max-width: 590px) {
        display: none;
    }

    img {
        position: absolute;
        top: 50%;
        left: 16px;
        transform: translateY(-50%);
        // transform: scale(1, -1);
    }
`

export const ViewBlock = styled.div<SearchBlockPropsType>`
    @media (max-width: 590px) {
        display: ${({openSearch}) => openSearch ? 'flex' : 'none'};
    }
    align-items: center;

    svg {
        cursor: pointer;
        @media (max-width: 590px) {
            width: 32px;
            height: 32px;
        }
    }

`
