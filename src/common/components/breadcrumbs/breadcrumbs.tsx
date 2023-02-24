import React, {FC} from 'react';
import {Link, useParams} from 'react-router-dom';

import {ROUTS} from '../../../constans/routs';
import {Container} from '../../../styled/styled-wpapper';
import {useAppSelector} from '../../hooks/hooks';

import {BookName, BreadcrumbsBlock, BreadcrumbsWrapper, Category} from './style';

type BreadcrumbsPropsType = {
    title: string
}
export const Breadcrumbs: FC<BreadcrumbsPropsType> = ({title}) => {
    const {category} = useParams()
    const book = useAppSelector(state => state.card)

    return (
        <BreadcrumbsWrapper>
            <Container>
                <BreadcrumbsBlock>
                    <Category>
                        <Link data-test-id='breadcrumbs-link' to={`${ROUTS.ROLL_BACK}${category}`}>
                            {category === 'all' ? 'Все книги' : book.categories[0]}
                        </Link>
                    </Category>
                    <BookName data-test-id='book-name'>
                        {title}
                    </BookName>
                </BreadcrumbsBlock>
            </Container>
        </BreadcrumbsWrapper>
    );
};

