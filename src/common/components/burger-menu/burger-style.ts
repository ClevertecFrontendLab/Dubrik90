import styled from 'styled-components';

type StyledNavMenuPropsType = {
    isMenuOpen: boolean;
    isMenuListOpen: boolean

}
export const StyledBurgerMenu = styled.nav<StyledNavMenuPropsType>`
    display: none;

    @media (max-width: 840px) {
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        flex: 0 0 280px;
        align-self: start;
        top: 80px;
        position: fixed;
        height: 80vh;
        min-width: 365px;
        left: ${({isMenuOpen}) => isMenuOpen ? '0' : '-100%'};
        opacity: ${({isMenuOpen}) => isMenuOpen ? '1' : '0'};
        visibility: ${({isMenuOpen}) => isMenuOpen ? 'visible' : 'hidden'};
        z-index: 20;
        background: #F9F9FA;
        box-shadow: 0 2px 4px rgba(191, 196, 201, 0.2), 0 3px 4px rgba(191, 196, 201, 0.18), 0 1px 5px rgba(191, 196, 201, 0.24);
        border-radius: 10px;
        padding: 30px 32px 50px 40px;
        transition: all 0.3s;
        overflow: auto;
        margin-bottom: 0;
    }
    @media (max-width: 400px) {
        min-width: 300px;
    }

    div:nth-child(1) {
        position: relative;

        button {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);

            img {
                transition: all 0.3s;
                transform: ${({isMenuListOpen}) => isMenuListOpen ? 'rotate(-180deg)' : 'rotate(0)'};
            }
        }

    }

    a.active {
        font-weight: 700;
        background: linear-gradient(233.73deg, #F83600 -16.08%, #F9D423 327.37%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        transition: all 0.3s;
    }

    div {
        display: flex;
        flex-direction: column;
        row-gap: 42px;
        padding-right: 15px;
        @media (max-width: 840px) {
            row-gap: 16px;
        }

        a {
            font-weight: 700;
            padding-bottom: 5px;
            transition: all 0.3s;

            &.active {
                transition: all 0.3s;
                border-bottom: 1px solid #F83600;
            }
        }
    }

    a {
        transition: all 0.3s;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 0.1px;

        :hover {
            background: linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            transition: all 0.3s;
        }
    }
`
