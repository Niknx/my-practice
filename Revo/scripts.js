"use srict";

/* Паралакс в header */
const header_br_img = document.querySelector(".header_br_img");

let scrolledOn = 0;

document.addEventListener("scroll", function (e) {
  scrolledOn = window.pageYOffset;
  let s = (1 + scrolledOn * 0.3).toFixed(3);
  header_br_img.setAttribute(
    "style",
    `transform: scale(1.01)  translateY(-${s}px);`
  );
});

/* Всплывающие окна */

/* login */
const body = document.querySelector("body");
const login_btn = document.querySelector(".login_btn");
const login_container = document.querySelector(".login_container");
const no_scroll = document.querySelector(".no_scroll");
const br_login = document.querySelector(".br_login");
const form_position = document.querySelector(".form_position");
const close_btn_login = document.querySelector(".close_btn_login");

const width_scroll_bar = window.innerWidth - body.clientWidth;

login_btn.addEventListener("click", function (e) {
  login_container.classList.toggle("close");
  body.classList.toggle("no_scroll");
  body.setAttribute("style", `padding-right: ${width_scroll_bar}px;`);
});

function close_aside_login() {
  login_container.classList.toggle("close");
  body.classList.toggle("no_scroll");
  body.setAttribute("style", ``);
}

br_login.addEventListener("click", function (e) {
  close_aside_login();
});
close_btn_login.addEventListener("click", function (e) {
  close_aside_login();
});

/* regist */
const regist_btn = document.querySelector(".regist_btn");
const regist_container = document.querySelector(".regist_container");
const br_regist = document.querySelector(".br_regist");
const form_regist = document.querySelector(".form_regist");
const close_btn_regist = document.querySelector(".close_btn_regist");

regist_btn.addEventListener("click", function (e) {
  regist_container.classList.toggle("close");
  body.classList.toggle("no_scroll");
  body.setAttribute("style", `padding-right: ${width_scroll_bar}px;`);
});

function close_aside_regist() {
  regist_container.classList.toggle("close");
  body.classList.toggle("no_scroll");
  body.setAttribute("style", ``);
}

br_regist.addEventListener("click", function (e) {
  close_aside_regist();
});
close_btn_regist.addEventListener("click", function (e) {
  close_aside_regist();
});

/* Код для первой карусели */
const carousel_container = document.querySelector(".carousel_container");
const all_card = document.querySelectorAll(".carousel_container > div");

const btn_next = document.querySelector(".btn_next");
const btn_previous = document.querySelector(".btn_previous");
const complete_absence_on_the_page = document.querySelector(
  ".complete_absence_on_the_page"
);

let n = 0;
let p = Math.round(all_card.length / 2 - 1);
btn_next.addEventListener("click", function (e) {
  n++;
  p--;
  carousel_container.setAttribute(
    "style",
    `transform: translateX(-${589 * n}px);`
  );

  if (n > 0) {
    btn_previous.classList.remove("complete_absence_on_the_page");
  }

  if (p == 0) {
    btn_next.classList.add("complete_absence_on_the_page");
  }
});

btn_previous.addEventListener("click", function (e) {
  p++;
  n--;
  carousel_container.setAttribute(
    "style",
    `transform: translateX(-${589 * n}px);`
  );

  if (p > 0) {
    btn_next.classList.remove("complete_absence_on_the_page");
  }

  if (n == 0) {
    btn_previous.classList.add("complete_absence_on_the_page");
  }
});

/* Код для Big Card */
const bc_btn_1 = document.querySelector("#bc_btn_1");
const bc_btn_2 = document.querySelector("#bc_btn_2");
const bc_btn_3 = document.querySelector("#bc_btn_3");

const big_coffee_img = document.querySelector("#big_coffee_img");
const big_card_price = document.querySelector(".big_card_price");

bc_btn_1.addEventListener("click", function (e) {
  if (
    bc_btn_2.classList.contains("active") ||
    bc_btn_3.classList.contains("active")
  ) {
    bc_btn_2.classList.remove("active");
    bc_btn_3.classList.remove("active");
    bc_btn_1.classList.add("active");
    big_coffee_img.setAttribute(
      "style",
      `background-image: url(img/big_coffee.png);`
    );
    big_card_price.textContent = "285.000";
  }
});

bc_btn_2.addEventListener("click", function (e) {
  if (
    bc_btn_1.classList.contains("active") ||
    bc_btn_3.classList.contains("active")
  ) {
    bc_btn_1.classList.remove("active");
    bc_btn_3.classList.remove("active");
    bc_btn_2.classList.add("active");
    big_coffee_img.setAttribute(
      "style",
      `background-image: url(img/big_coffee_2.png);`
    );
    big_card_price.textContent = "400.000";
  }
});

bc_btn_3.addEventListener("click", function (e) {
  if (
    bc_btn_2.classList.contains("active") ||
    bc_btn_1.classList.contains("active")
  ) {
    bc_btn_2.classList.remove("active");
    bc_btn_1.classList.remove("active");
    bc_btn_3.classList.add("active");
    big_coffee_img.setAttribute(
      "style",
      `background-image: url(img/big_coffee.png);`
    );
    big_card_price.textContent = "285.000";
  }
});

/* Код для второй карусели */

const card_combo_container = document.querySelector(".card_combo_container");
const all_card_2 = document.querySelectorAll(".card_combo_container > div");

const btn_next_2 = document.querySelector(".btn_next_2");
const btn_previous_2 = document.querySelector(".btn_previous_2");
// const complete_absence_on_the_page = document.querySelector(".complete_absence_on_the_page");

let n_2 = 0;
let p_2 = all_card_2.length - 1;
btn_next_2.addEventListener("click", function (e) {
  n_2++;
  p_2--;
  card_combo_container.setAttribute(
    "style",
    `transform: translateX(-${395 * n_2}px);`
  );

  if (n_2 > 0) {
    btn_previous_2.classList.remove("complete_absence_on_the_page");
  }

  if (p_2 == 0) {
    btn_next_2.classList.add("complete_absence_on_the_page");
  }
});

btn_previous_2.addEventListener("click", function (e) {
  p_2++;
  n_2--;
  card_combo_container.setAttribute(
    "style",
    `transform: translateX(-${395 * n_2}px);`
  );

  if (p_2 > 0) {
    btn_next_2.classList.remove("complete_absence_on_the_page");
  }

  if (n_2 == 0) {
    btn_previous_2.classList.add("complete_absence_on_the_page");
  }
});
