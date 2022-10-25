
// const swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 300,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//
//     },
// });





const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});