import styled from 'styled-components';

export const ErrorWrapper = styled.div`
    position: absolute;
    width: 100%;
    max-width: 1100px;
    top: 80px;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: #feebea;
    border: 1.5px solid #f42c4f;
    border-radius: 5px;
    padding: 23px 32px;
    display: flex;
    column-gap: 24px;
    justify-content: space-between;
    align-items: center;
    z-index: 50;

    p {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.1px;
        color: #363636;
        flex: 1 1 auto;
    }

`
