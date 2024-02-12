import { Ref, SVGProps, forwardRef, memo } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        ref={ref}
        {...props}
        width='20'
        height='66'
        viewBox='0 0 20 66'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path d='M0 0L20 8V58L0 66V0Z' fill='white' />
    </svg>
);
const ForwardRef = forwardRef(SvgComponent);

export default memo(ForwardRef);
