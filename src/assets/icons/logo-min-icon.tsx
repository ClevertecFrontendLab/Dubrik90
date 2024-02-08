import { Ref, SVGProps, forwardRef, memo } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        ref={ref}
        {...props}
        width='29'
        height='28'
        viewBox='0 0 29 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M24.2449 9.20682H27.7078V12.9386H24.2449V20.0696C24.2449 22.4966 24.3952 22.4894 24.6957 22.7737C24.9963 23.058 25.5974 23.2002 26.4991 23.2002C26.7997 23.2357 27.0627 23.2002 27.3632 23.1647C27.6262 23.1647 27.9896 22.9633 28.1774 22.7737V26.6832C27.7078 26.8839 27.1754 27.1097 26.6494 27.1097C26.0858 27.1453 25.5599 27.1453 25.0339 27.1453C24.9987 27.1453 24.4038 27.1453 24.1533 27.1097C23.5432 27.0231 22.6358 26.701 22.0723 26.3811C21.7592 26.2034 20.9452 25.4038 20.8513 25.0483C20.5695 24.6041 20.4127 23.7333 20.4127 22.8093V12.9386H17.0942V9.20682H20.4127V2.98712H24.2449V9.20682Z'
            fill='#10239E'
        />
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0.563477 12.9386H3.19339V26.7188H7.40129V12.9386H10.5196L10.5196 9.20682H7.40127L7.40129 8.88695C7.40129 8.14059 7.55157 7.43181 7.85213 7.11194C8.15269 6.79207 8.67868 6.61437 9.43008 6.61437C10.1063 6.61437 10.745 6.64991 11.3837 6.72099V2.98713L9.95606 2.98712L8.54718 2.98713C6.76256 2.98713 5.35368 3.84808 4.50835 4.67533C3.41881 5.74156 3.19339 6.96773 3.19339 8.56708L3.19337 9.20682H0.563458L0.563477 12.9386ZM15.9673 14.538H11.8721V26.7188H15.9673V14.538Z'
            fill='#10239E'
        />
        <path
            d='M15.9673 11.1083C15.9673 12.1909 15.0775 13.0686 13.9948 13.0686C12.9122 13.0686 12.0224 12.1909 12.0224 11.1083C12.0224 10.0257 12.9122 9.14801 13.9948 9.14801C15.0775 9.14801 15.9673 10.0257 15.9673 11.1083Z'
            fill='#40A9FF'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgComponent);

export default memo(ForwardRef);