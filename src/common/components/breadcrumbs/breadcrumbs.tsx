import React, {FC} from 'react';

import {Container} from '../../../styled/styled-wpapper';
import {useAppSelector} from '../../hooks/hooks';

import {BookName, BreadcrumbsBlock, BreadcrumbsWrapper, Category} from './style';

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
                        {book.categories[0]}
                    </Category>
                    <BookName>
                        {title}
                    </BookName>
                </BreadcrumbsBlock>
            </Container>
        </BreadcrumbsWrapper>
    );
};

