import Swiper from 'swiper';
import 'swiper/css';

const swiperTestemonials = new Swiper('.testimonials__card-box', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.testimonials__btn-arrow--left',
        prevEl: '.testimonials__btn-arrow--right'
    }
});


export default swiperTestemonials