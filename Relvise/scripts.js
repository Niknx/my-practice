"use strict";

/* Видео */
const videoWhoContainer = document.querySelector(".video_who_container");
const tagVideo = document.querySelector(".tag_video");
const imgPoster = document.querySelector(".img_poster");
const btnPlay = document.querySelector(".btn_play");


videoWhoContainer.addEventListener("click", function(e) {
    if (tagVideo.paused) {
        tagVideo.play();
        imgPoster.classList.toggle("active");
        btnPlay.classList.toggle("active");
    } else {
        imgPoster.classList.toggle("active");
        btnPlay.classList.toggle("active");
    }
});

/* Скрол */
const contact_header = document.querySelector("#contact_header");
const get_footer = document.querySelector("#get_footer");

contact_header.addEventListener("click", function(e) {
    get_footer.scrollIntoView({ block: "center", inline: "nearest", behavior: "smooth"});
});

/* Меню в header */
const btnMenuAnimation = document.querySelector(".btn_menu_animation");
const navHeaderContainer = document.querySelector(".nav_header_container");

btnMenuAnimation.addEventListener("click", function(e) {
    btnMenuAnimation.classList.toggle("active");
    navHeaderContainer.classList.toggle("active");
});

document.addEventListener("click", function(e){
    const target = e.target;
    const its_menu = target == navHeaderContainer || navHeaderContainer.contains(target);

    if (its_menu) {
        btnMenuAnimation.classList.toggle("active");
        navHeaderContainer.classList.toggle("active");
    }
})