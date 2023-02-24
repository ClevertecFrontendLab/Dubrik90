import React, {FC} from 'react';
import {SpanHightLight} from './style';

type HightLightPropsType = {
    filter: string,
    str: any
}
export const HightLight: FC<HightLightPropsType> = ({str, filter}) => {
    if (!filter) return str
    const regexp = new RegExp(filter, 'ig')
    const matchValue = str.match(regexp)

    if (matchValue) {
        return str.split(regexp).map((s: never, index: never, array: any) => {
            if (index < array.length - 1) {
                const c = matchValue.shift()

                return <React.Fragment
                    key={Math.random()}>{s}<SpanHightLight data-test-id='highlight-matches'>{c}</SpanHightLight></React.Fragment>
            }
            return s
        })
    }

    return str
};

