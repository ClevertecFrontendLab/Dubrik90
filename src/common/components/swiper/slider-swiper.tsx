import React, {FC, useState} from 'react';
import {EffectFade, FreeMode, Navigation, Pagination, Thumbs} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';

import imageNone from '../../../assets/img/imageNone.png'
import {ImageType} from '../../../pages/book-page/api/book-page-api';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

type SwiperSliderPropsType = {
    image: ImageType[]
}
export const SwiperSlider: FC<SwiperSliderPropsType> = ({image}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

    return (
        <React.Fragment>
            <Swiper
                data-test-id='slide-big'
                loop={true}
                spaceBetween={10}
                navigation={false}
                thumbs={{swiper: thumbsSwiper}}
                effect="fade"
                pagination={{
                    clickable: true,
                    type: 'bullets',
                }}
                modules={[FreeMode, Navigation, Thumbs, EffectFade, Pagination]}
                className="mySwiper2"
            >
                {
                    image.length === 0
                        ? <SwiperSlide >
                            <img src={imageNone} alt='no foto'/>
                        </SwiperSlide>
                        : image.map(el => (
                            <SwiperSlide key={el.url}>
                                <img src={`https://strapi.cleverland.by${el.url}`} alt='book'/>
                            </SwiperSlide>
                        ))
                }

            </Swiper>
            {
                image.length > 1 &&
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={5}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {
                        image.map(el => (
                            <SwiperSlide data-test-id='slide-mini' key={el.url}>
                                <img src={`https://strapi.cleverland.by${el.url}`} alt='book'/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            }
        </React.Fragment>
    );
}
