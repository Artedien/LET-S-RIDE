import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperHeader = () => {
    const curSlide = document.querySelector('.header__bottom-swiper-count');
    const slides = document.querySelectorAll('.header__bottom-swiper-slide');

    slides.forEach((item, i) => (item.dataset.num = i));

    const swiper = new Swiper('.header__bottom-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        // effect: 'fade',
        allowTouchMove: false,
        // fadeEffect: {
        //     crossFade: true
        // },
        effect: 'creative',
        speed: 1000,
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ['100%', 0, -1],
                scale: 0.2,
                shadow: false
            },
            next: {
                translate: ['100%', 0, 0],
                shadow: false
            }
        },
        loop: true,
        navigation: {
            nextEl: '.header__bottom-right',
            prevEl: '.header__bottom-left'
        },
        on: {
            init: (swiper) => {
                curSlide.textContent = `${(+swiper.slides[swiper.activeIndex].getAttribute('data-num') + 1)
                    .toString()
                    .padStart(2, '0')}`;
            },
            slideChange: function (swiper) {
                curSlide.textContent = `${(+swiper.slides[swiper.activeIndex].getAttribute('data-num') + 1)
                    .toString()
                    .padStart(2, '0')}`;
            }
        }
    });
};

export default swiperHeader;
