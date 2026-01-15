// jumbo-slider
var jumboSwiper = new Swiper(".jumbo-slider", {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".jumbo-pagination",
        clickable: true,
    },
    navigation: {
        prevEl: ".jumbo-prev",
        nextEl: ".jumbo-next",
    },
});

// ground-slider
var groundSwiper = new Swiper(".ground-slider", {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".ground-pagination",
        clickable: true,
    },
});

// culture-slider
var cultureSwiper = new Swiper(".culture-slider", {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".culture-pagination",
        clickable: true,
    },
});