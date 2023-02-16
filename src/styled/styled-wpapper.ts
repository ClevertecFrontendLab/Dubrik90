import styled from 'styled-components';


export const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: clip;
    position: relative;
`
export const Container = styled.div`
    max-width: 1110px;
    box-sizing: content-box;
    margin: 0 auto;
    padding: 0 15px;
`
export const Preloader = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
        width: 100%;
        height: 100%;
    }


`


