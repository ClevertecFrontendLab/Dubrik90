import styled from 'styled-components';

export const MainWrap = styled.main`
    flex: 1 1 auto;
    font-family: 'Montserrat', sans-serif;
    padding: 40px 0;
    @media (max-width: 590px) {
        padding: 8px 0 20px 0;
    }
`

export const MainContent = styled.div`
    display: flex;
    flex-grow: 1;
    column-gap: 5px;
    //position: relative;
    @media (max-width: 350px) {
       flex-direction: column;
    }
`

