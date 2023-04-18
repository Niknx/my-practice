"use strict";

/* Меню */
const buttonMenuIcon = document.querySelector(".menu-icon");
const buttonMenuText = document.querySelector(".menu-text");
const dropMenu = document.querySelector(".dropdown-menu");
const dropMenuLi = document.querySelector(".menu-li");

const toggleMenu = function () {
    buttonMenuIcon.classList.toggle("active");
    buttonMenuText.classList.toggle("active");
    dropMenu.classList.toggle("active");
}

buttonMenuText.addEventListener("click", toggleMenu);
buttonMenuIcon.addEventListener("click", toggleMenu);

document.addEventListener("click", function(e){
    const target = e.target;
    const its_menu = target == dropMenu || dropMenu.contains(target) && !dropMenuLi;
    const its_btnMenuText = target == buttonMenuText;
    const its_btnMenuIcon = target == buttonMenuIcon;
    const menu_is_active = dropMenu.classList.contains("active");

    if (!its_menu && !its_btnMenuText && !its_btnMenuIcon && menu_is_active) {
        toggleMenu();
    }
})

/* Изменение языка страницы */
const headerLang = document.querySelector(".header-lang");
const headerLangRu = document.querySelector(".header-lang-ru");

headerLang.addEventListener("click", function(e) {
    headerLang.classList.toggle("active-lang");
    headerLangRu.classList.toggle("active-lang");
});





/* Паралакс header */
const decorHeaderNumb = document.querySelector(".decor-header-numb");
const centerHeaderMouse = document.querySelector(".center-header-mouse");
const rightHeaderContainer = document.querySelector(".right-header-container");
const imgBrevno = document.querySelector(".img-brevno");
const imgDrova = document.querySelector(".img-drova");
/* Паралакс header*/

/* Анимация полос main 01 */
const mainDeocrLine1 = document.querySelector(".main-deocr-line-1");
const mainDeocrLine2 = document.querySelector(".main-deocr-line-2");
/* Анимация полос main 01 */

/* Анимация полос main 02 */
const mainDeocr2Line1 = document.querySelector(".main-deocr-2-line-1");
const mainDeocr2Line2 = document.querySelector(".main-deocr-2-line-2");
/* Анимация полос main 02 */

/* Паралакс watch video*/
const imgBgWatchVideo = document.querySelector(".img-bg-watch-video");
/* Паралакс watch video*/

let s = 1; //Увеличение картинок Header при scroll
let s2 = 1; //Увеличение картинок watch video при scroll

let scrolledOn = 0; //На сколько прокручена страница
let y = scrolledOn; //Переменна с коэффициентом для эффекта паралакс в Header
let y2 = scrolledOn; //Переменна с местом для эффекта паралакс в Main, section 1
let y3 = scrolledOn; //Переменна с местом для эффекта паралакс в Main, section 2


document.addEventListener('scroll', function(){
    scrolledOn = window.pageYOffset; 
    /* Паралакс header*/
    if (scrolledOn < 500) {
        y = (scrolledOn * 0.3).toFixed(2);
        decorHeaderNumb.setAttribute('style', `transform: translateY(${y}px);`);
        centerHeaderMouse.setAttribute('style', `transform: translateY(${y/1.5}px);`);
        rightHeaderContainer.setAttribute('style', `transform: translateY(${-y}px);`);
        s = (1 + (scrolledOn * 0.0001)).toFixed(3);
        imgBrevno.setAttribute('style', `transform: scale(${s});`);
        imgDrova.setAttribute('style', `transform: scale(${s});`);
    }
    /* Паралакс header*/

    /* Паралакс main*/
    y2 = (680 - scrolledOn).toFixed(2);

    if (scrolledOn > 680 && scrolledOn < 800) {
        mainDeocrLine1.setAttribute('style', `transform: translateY(${-y2/1.32}px);`);
        mainDeocrLine2.setAttribute('style', `transform: translateY(${y2/2.45}px);`);
    }

    y3 = (1140 - scrolledOn).toFixed(2);
    if (scrolledOn > 1140 && scrolledOn < 1260) {
        mainDeocr2Line1.setAttribute('style', `transform: translateY(${-y3/1.08}px);`);
        mainDeocr2Line2.setAttribute('style', `transform: translateY(${y3/2.45}px);`);
    }
    /* Паралакс main*/

    /* Паралакс watch video*/
    if (scrolledOn > 2100 && scrolledOn < 2700) {
        s2 = (1.1 + ((scrolledOn - 2100) * 0.0001)).toFixed(3);
        imgBgWatchVideo.setAttribute('style', `transform: scale(${s2});`);
    }
    /* Паралакс watch video*/
  });

/*   Анимация social */
const socialBg = document.querySelector(".social-bg");
const socImgContainer = document.querySelector(".soc-img-container");

socImgContainer.addEventListener("click", function(e){
    socialBg.classList.toggle("active-soc");
    socImgContainer.classList.toggle("active-soc");
});

/* Анимация stories */
const poster1 = document.querySelector(".poster-1");
const poster2 = document.querySelector(".poster-2");
const poster3 = document.querySelector(".poster-3");
const imgStories1 = document.querySelector(".img-stories-1");
const imgStories2 = document.querySelector(".img-stories-2");
const imgStories3 = document.querySelector(".img-stories-3");
const btnStory1 = document.querySelector(".btn-story-1");
const btnStory2 = document.querySelector(".btn-story-2");
const btnStory3 = document.querySelector(".btn-story-3");
const video1 = document.querySelector(".video-1");
const video2 = document.querySelector(".video-2");
const video3 = document.querySelector(".video-3");



poster1.addEventListener("click", function(e) {
    if (video1.paused) {
        video1.play();
        imgStories1.classList.toggle("active-stories");
        btnStory1.classList.toggle("active-stories");
    } else {
        video1.pause();
        imgStories1.classList.toggle("active-stories");
        btnStory1.classList.toggle("active-stories");
        setTimeout(function() {video1.currentTime = 0;}, 400);
    }
});

video1.addEventListener("ended", function(e){
    imgStories1.classList.toggle("active-stories");
    btnStory1.classList.toggle("active-stories");
    setTimeout(function() {video1.currentTime = 0;}, 400);
});





poster2.addEventListener("click", function(e) {
    if (video2.paused) {
        video2.play();
        imgStories2.classList.toggle("active-stories");
        btnStory2.classList.toggle("active-stories");
    } else {
        video2.pause();
        imgStories2.classList.toggle("active-stories");
        btnStory2.classList.toggle("active-stories");
        setTimeout(function() {video2.currentTime = 0;}, 400);
    }
});

video2.addEventListener("ended", function(e){
    imgStories2.classList.toggle("active-stories");
    btnStory2.classList.toggle("active-stories");
    setTimeout(function() {video2.currentTime = 0;}, 400);
});





poster3.addEventListener("click", function(e) {
    if (video3.paused) {
        video3.play();
        imgStories3.classList.toggle("active-stories");
        btnStory3.classList.toggle("active-stories");
    } else {
        video3.pause();
        imgStories3.classList.toggle("active-stories");
        btnStory3.classList.toggle("active-stories");
        setTimeout(function() {video3.currentTime = 0;}, 400);
    }
});

video3.addEventListener("ended", function(e){
    imgStories3.classList.toggle("active-stories");
    btnStory3.classList.toggle("active-stories");
    setTimeout(function() {video3.currentTime = 0;}, 400);
});

/* Размытие при наведении на кнопку в watch video */
const posBtnWV = document.querySelector(".pos-btn-w-v");

posBtnWV.addEventListener("mouseover", function(e){
    imgBgWatchVideo.classList.toggle("active-img-bg-w-v");
});

posBtnWV.addEventListener("mouseout", function(e){
    imgBgWatchVideo.classList.toggle("active-img-bg-w-v");
});

/* Появление видео при нажатии кнопки */
const videoWatchVideo = document.querySelector(".video-watch-video");
const btnCloseVideo = document.querySelector(".btn-close-video");

posBtnWV.addEventListener("click", function(e) {
    videoWatchVideo.classList.toggle("active-watch-video");
    imgBgWatchVideo.classList.toggle("active-img-bg-w-v");
    btnCloseVideo.classList.toggle("active-btn-close-video");
});

btnCloseVideo.addEventListener("click", function(e) {
    videoWatchVideo.pause();
    setTimeout(function() {videoWatchVideo.currentTime = 0;}, 300);
    videoWatchVideo.classList.toggle("active-watch-video");
    imgBgWatchVideo.classList.toggle("active-img-bg-w-v");
    btnCloseVideo.classList.toggle("active-btn-close-video");
});

/* Прокрутка при нажатии */
const men_prod = document.querySelector("#men_prod");
const men_about = document.querySelector("#men_about");
const nav_prod = document.querySelector("#nav_prod");
const nav_about = document.querySelector("#nav_about");

const furniture = document.querySelector(".furniture");
const aboutUsContainer = document.querySelector(".about-us-container");

men_prod.addEventListener("click", function(e) {
    furniture.scrollIntoView({ block: "start", inline: "nearest", behavior: "smooth"});
});

nav_prod.addEventListener("click", function(e) {
    furniture.scrollIntoView({ block: "start", inline: "nearest", behavior: "smooth"});
});


men_about.addEventListener("click", function(e) {
    aboutUsContainer.scrollIntoView({ block: "center", inline: "nearest", behavior: "smooth"});
});

nav_about.addEventListener("click", function(e) {
    aboutUsContainer.scrollIntoView({ block: "center", inline: "nearest", behavior: "smooth"});
});