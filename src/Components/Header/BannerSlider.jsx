import { SwiperSlide, Swiper } from 'swiper/react';
import "swiper/css";
import "swiper/css/bundle";

import { Autoplay, Navigation } from 'swiper/modules';
const BannerSlider = () => {
    return (
        <div>
             <Swiper
                // slidesPerView={2}
                centeredSlides={true}
                spaceBetween={30}
                // autoplay={{
                //     delay: 2000
                // }}
                pagination={{
                  type: 'fraction',
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                loop={true}>
                <SwiperSlide>
                    <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://ibb.co/N23gVM4')]">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://ibb.co/ZVxtLFw')]">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://ibb.co/s1kX0F2')]">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://ibb.co/mtTd0Qh')]">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://ibb.co/MDc40Kj')]">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[60vh] w-full bg-cover bg-no-repeat bg-center bg-[url('https://ibb.co/CM3S5Bs')]">
                    </div>
                </SwiperSlide>
            </Swiper>
            
        </div>
    );
};

export default BannerSlider;