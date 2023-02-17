import styled from 'styled-components';

import {PropsImageType} from '../../../styled/image-wrapper';

export const HeaderWrapper = styled.header`
    padding: 32px 0 15px 0;
    min-height: 58px;
    @media (max-width: 590px) {
        padding: 18px 0;
    }
    @media (max-width: 320px) {
        margin-bottom: 8px;
    }
`
export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`

export const HeaderImage = styled.div<PropsImageType>`

    :hover {
        scale: ${({hover}) => hover ? '1.1' : '1'};
    }

    img {
        max-width: 100%;
        object-fit: cover;
        cursor: pointer;
    }
`
export const HeaderImageLogo = styled(HeaderImage)`
    @media (max-width: 840px) {
        display: none;
    }
`
export const HeaderImageProfile = styled(HeaderImage)`
    @media (max-width: 768px) {
        display: none;
    }
`

export const HeaderTitle = styled.div`
    flex: 1 1 auto;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.1px;
    color: #363636;
    margin-left: 120px;
    @media (max-width: 768px) {
        margin-left: 25px;
    }
`
export const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  @media (max-width: 768px) {
    display: none;
  }

`
export const ProfileName = styled.p`
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.1px;
    color: #363636;
`



