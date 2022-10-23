
// const swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 300,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//
//     },
// });





const swiper = new Swiper (".mySwiper", {
    loop:true,
    pagination: {
        el: ".swiper-pagination",
    },
    slidesPerView: 1,

    breakpoints: {
        '575': {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
        '767': {
            slidesPerView: 2,
            spaceBetween: 100,},

        '360': {
            slidesPerView: 2,
            spaceBetween: 100,},

    }

)
