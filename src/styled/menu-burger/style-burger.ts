import styled from 'styled-components';

type BurgerProps = {
    isOpenBurger: boolean
}

export const Burger = styled.button<BurgerProps>`

  display: none;
  @media (max-width: 840px) {
    display: block;
    position: relative;
    width: 30px;
    flex: 0 0 30px;
    height: 18px;
    cursor: pointer;
    z-index: 50;

    span,
    &::before,
    &::after {
      content: "";
      transition: all 0.3s ease 0s;
      left: 0;
      position: absolute;
      width: 100%;
      height: 2px;
      background: #363636;

      @media (max-width: 768px) {
        background: #363636;
      }
    }

    &::before {
      top: ${({isOpenBurger}) => isOpenBurger ? 'calc(50% - 1px)' : '0px'};
      transform: ${({isOpenBurger}) => isOpenBurger && 'rotate(-45deg)'};
    }

    &::after {
      bottom: ${({isOpenBurger}) => isOpenBurger ? 'calc(50% - 1px)' : '0px'};
      transform: ${({isOpenBurger}) => isOpenBurger && 'rotate(45deg)'};
    }

    span {
      top: calc(50% - 1px);
      transform: ${({isOpenBurger}) => isOpenBurger && 'scale(0)'};
    }
  }
`
