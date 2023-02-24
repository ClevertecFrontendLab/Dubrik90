import styled from 'styled-components';

type StyledNavMenuPropsType = {
    isMenuOpen: boolean;
    isMenuListOpen: boolean
}
export const BurgerMenuWrapper = styled.nav.attrs({
    'data-test-id': 'burger-navigation'
}) <StyledNavMenuPropsType>`
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
export const NavigateMenuAll = styled.a.attrs({
    'data-test-id': 'navigation-showcase'
})``

export const BurgerMenuAll = styled.a.attrs({
    'data-test-id': 'burger-showcase'
})``

export const NavigateMenuWrapper = styled.nav.attrs({
    'data-test-id': 'burger-navigation'
})<StyledNavMenuPropsType>`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    flex: 0 0 280px;
    align-self: start;
    margin-bottom: 62px;

    @media (max-width: 911px) {
        flex: 0 0 250px;
    }

    @media (max-width: 840px) {
        display: none;
        position: absolute;
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

type MenuListPropsType = {
    isMenuListOpen: boolean
}
export const MenuList = styled.ul<MenuListPropsType>`
    padding: 15px 5px 5px 22px;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    align-items: flex-start;
    transition: all 0.3s;
    position: ${({isMenuListOpen}) => isMenuListOpen ? 'relative' : 'fixed'};
    left: ${({isMenuListOpen}) => isMenuListOpen ? '0' : '-100%'};
    opacity: ${({isMenuListOpen}) => isMenuListOpen ? '1' : '0'};
    visibility: ${({isMenuListOpen}) => isMenuListOpen ? 'visible' : 'hidden'};

`
export const MenuItem = styled.li`
    transition: all 0.3s;
    font-weight: 400;
    display: inline-flex;

    a {
        display: inline-block;
        margin-right: 5px;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.1px;
        color: #363636;

        span {
            padding-left: 5px;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: 0.1px;
            color: #A7A7A7;
        }

        @media (max-width: 911px) {
            font-size: 14px;
        }

    }
`
