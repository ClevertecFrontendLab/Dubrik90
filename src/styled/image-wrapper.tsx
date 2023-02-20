import React, {FC} from 'react';

import {HeaderImage} from '../common/components/header/style';

export type PropsImageDefault = {
    width: string,
    height: string,
    cursor: string
    borderRadius: string
    hover: boolean
    mediaWidth: string
}

export type PropsImg = PropsImageDefault;
export type PropsImageType = Partial<PropsImg>

export const ImageWrapper: FC<PropsImageType> = (props) => (
    <HeaderImage {...props}/>
);
