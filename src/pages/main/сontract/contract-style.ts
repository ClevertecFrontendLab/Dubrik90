import styled from 'styled-components';

export const ContractWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  font-family: 'Montserrat', serif;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #363636;
  margin-bottom: 62px;

`
export const СontractTitle = styled.h2`
    font-family: 'Montserrat', serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.1px;
    color: #363636;
`
export const TitleList = styled.div`
    font-weight: 600;

    p:nth-child(1) {
        margin-bottom: 16px;
    }

    div {
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        font-weight: 400;
        padding-left: 30px;
    }
`
export const SubList = styled.div`
    p {
        padding-left: 60px;
    }
`
