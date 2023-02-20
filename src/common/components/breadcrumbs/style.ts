import styled from "styled-components";

export const BreadcrumbsWrapper = styled.div`
    background: #F9F9FA;
    padding: 23px 0;
    margin-bottom: 42px;
`
export const BreadcrumbsBlock = styled.div`
    display: flex;
    column-gap: 8px;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.1px;
    color: #A7A7A7;
`
export const Category = styled.div`
    :after {
        content: '/';
        width: 2px;
        padding-left: 10px;
    }
`
export const BookName = styled.div`
`
