import styled from "styled-components";

export const SwiperWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    @media (max-width: 520px) {
        align-self: center;
    }

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide img {
        display: block;
        max-width: 100%;
        height: 100%;
        object-position: center;
    }

   .mySwiper2 {
        height: 80%;
        width: 100%;
        margin-bottom: 20px;
    }

    .mySwiper {
        height: 20%;
        box-sizing: border-box;
        padding: 10px 0;

    }

    .mySwiper .swiper-wrapper {
        width: 350px;
        height: 86px;
    }

    .mySwiper .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
    }

    .mySwiper .swiper-slide-thumb-active {
        opacity: 1;
    }

    ////////////////

    .swiper, swiper-container {
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
        display: block
    }

    .swiper-vertical > .swiper-wrapper {
        flex-direction: column
    }

    .swiper-wrapper {
        position: relative;
        width: 494px;
        height: 594px;
        z-index: 1;
        display: flex;
        transition-property: transform;
        transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
        box-sizing: content-box;
        @media (max-width: 943px) {
            max-width: 300px;
            height: 400px;
        }
        @media (max-width: 768px) {
            max-width: 136px;
            height: 198px;
        }
        @media (max-width: 520px) {
            max-width: 188px;
            height: 260px;
        }
    }

    .swiper.swiper-thumbs {
        width: 300px;
        @media (max-width: 768px) {
            display: none;
            visibility: hidden;
        }
    }


    .swiper-android .swiper-slide, .swiper-wrapper {
        transform: translate3d(0px, 0, 0)
    }

    .swiper-horizontal {
        touch-action: pan-y
    }

    .swiper-vertical {
        touch-action: pan-x
    }

    .swiper-slide {
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        position: relative;
        transition-property: transform;
        display: block
    }

    .swiper-backface-hidden .swiper-slide {
        transform: translateZ(0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden
    }

    .swiper-lazy-preloader {
        width: 42px;
        height: 42px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -21px;
        margin-top: -21px;
        z-index: 10;
        transform-origin: 50%;
        box-sizing: border-box;
        border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
        border-radius: 50%;
        border-top-color: transparent
    }

    .swiper-lazy-preloader-white {
        --swiper-preloader-color: #fff;
    }

    .swiper-lazy-preloader-black {
        --swiper-preloader-color: #000
    }

    @keyframes swiper-preloader-spin {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }

    @media (max-width: 768px) {
        .swiper-pagination {
            padding: 8px 0;
            text-align: center;
            transition: .3s opacity;
            transform: translate3d(0, 0, 0);
            z-index: 10
        }

        .swiper-pagination.swiper-pagination-hidden {
            opacity: 0
        }

        .swiper-pagination-bullet {
            width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
            height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
            display: inline-block;
            border-radius: 50%;
            background: var(--swiper-pagination-bullet-inactive-color, #BFC4C9);
        }

        .swiper-pagination-clickable .swiper-pagination-bullet {
            cursor: pointer
        }

        .swiper-pagination-bullet-active {
            background: #363636;
        }

        .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
            margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px)
        }

        .swiper-pagination-lock {
            display: none
        }

    }

`
