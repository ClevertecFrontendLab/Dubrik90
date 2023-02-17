import React, {FC} from 'react';
import {useParams} from 'react-router-dom';

import {
    BookName,
    BreadcrumbsBlock,
    BreadcrumbsWrapper,
    Category
} from '../../../pages/book-page/book-page-style';
import {Container} from '../../../styled/styled-wpapper';
import {useAppSelector} from '../../hooks/hooks';

type BreadcrumbsPropsType = {
    title: string
}
export const Breadcrumbs: FC<BreadcrumbsPropsType> = ({title}) => {
    const book = useAppSelector(state => state.card)

    return (
        <BreadcrumbsWrapper>
            <Container>
                <BreadcrumbsBlock>
                    <Category>
                        {book.categories}
                    </Category>
                    <BookName>
                        {title}
                    </BookName>
                </BreadcrumbsBlock>
            </Container>
        </BreadcrumbsWrapper>
    );
};

