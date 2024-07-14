// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
function swiper() {

// import styles bundle
// import 'swiper/css/bundle';

// init Swiper:
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // slidesPerView: 4.1,
        slidesPerView: 'auto',
        spaceBetween: 24,


        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            840: {
                spaceBetween: 24
            }
        }

        // Navigation arrows
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },


    });
}

export default swiper;