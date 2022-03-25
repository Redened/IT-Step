var slider = document.getElementById("slider");

noUiSlider.create(slider, {
    start: [0, 100],
    connect: true,
    tooltips: true,
    range: {
        min: 0,
        max: 100,
    },
});

var sliderValueElement = document.getElementById("slider-value");

slider.noUiSlider.on("update", function (values, handle) {
    sliderValueElement.innerHTML = values.join(" - ");
});

const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,

    pagination: {
        el: ".swiper-pagination",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        1000: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1500: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        2000: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});
