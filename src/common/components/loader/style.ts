import styled from 'styled-components';

export const WrapperLoader = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(54, 54, 54, 0.3);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderImg = styled.img`
  transition: all 0.2s ease-out;
  animation: loading-spinner 1s linear infinite;
  @keyframes loading-spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

`;
