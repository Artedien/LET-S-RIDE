import './index.scss';
import swiperHeader from './js/components/swiperHeader';
import fancybox from './js/components/fancybox';
import headerDropdown from './js/components/headerDropdown';
import modal from './js/components/modal';


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
});



