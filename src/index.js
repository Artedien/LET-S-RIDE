import './index.scss';
import swiperHeader from './js/components/swiperHeader';
import fancybox from './js/components/fancybox';
import headerDropdown from './js/components/headerDropdown';
import modal from './js/components/modal';
import swiperTestemonials from './js/components/swiperTestemonials';
import scroll from './js/components/scroll';

window.addEventListener('DOMContentLoaded', () => {
    try {
        swiperHeader();
    } catch {}
    try {
        fancybox();
    } catch {}
    try {
        headerDropdown();
    } catch {}
    try {
        modal();
    } catch {}
    try {
        wowAnim();
    } catch {}
    try {
        swiperTestemonials();
    } catch {}
    try {
        scroll();
    } catch {}
});

import 'animate.css';
import WOW from 'wow.js';

function wowAnim() {
    const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 150,
        mobile: true,
        live: true
    });
    wow.init();
}
