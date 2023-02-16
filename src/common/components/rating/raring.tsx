import React, {FC} from 'react';

import empty from './assets/empty.png';
import full from './assets/full.svg';
import {RaringWrapper} from './style';

type RaringPropsType = {
    rating: number | null
}
export const Raring: FC<RaringPropsType> = ({rating}) => {
    const stars: number[] = [1, 2, 3, 4, 5];

    return (
        <RaringWrapper>
            {rating === null
                ? 'ещё нет оценок'
                : stars.map((star, index) => (
                    <img key={star} src={index + 1 <= rating ? full : empty} alt='star'/>
                ))}
        </RaringWrapper>
    )
};

