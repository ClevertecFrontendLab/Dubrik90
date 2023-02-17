import styled from 'styled-components';

export const FooterStyle = styled.footer`
    padding-top: 16px;
    padding-bottom: 16px;
`

export const FooterBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Montserrat', serif;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: #363636;

    @media (max-width: 552px) {
        flex-direction: column;
        text-align: center;
        row-gap: 16px;
    }
`
export const SocialIcons = styled.div`
    display: flex;
    flex: 0 0 24px;
    column-gap: 24px;
`
