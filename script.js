const main_container = document.getElementById("main_container");
const about_container = document.getElementById("about_container");
const partners_container = document.getElementById("partners_container");
const projects_container = document.getElementById("projects_container");
const circle_orange_div = document.querySelector(".circle-orange-div");
const circle_blue_div = document.querySelector(".circle-blue-div");
const rectangle_green_div = document.querySelector(".rectangle-green-div");
const rectangle_black_div = document.querySelector(".rectangle-black-div");
window.onscroll = () => {
    if (window.scrollY > 0 && window.scrollY < 300) {
        main_container.style.animation = "div_animation 1.6s";
        main_container.style.marginLeft = "12.5%";
        circle_orange_div.style.animation = "circle-orange-div_animation 1s";
        circle_orange_div.style.right = "-300px";
    } else if (window.scrollY > 600 && window.scrollY < 1000) {
        about_container.style.animation = "div_animation 1.6s";
        about_container.style.marginLeft = "12.5%";
        circle_blue_div.style.animation = "circle-blue-div_animation 1s";
        circle_blue_div.style.left = "-300px";
    } else if (window.scrollY > 1500 && window.scrollY < 1900) {
        partners_container.style.animation = "div_animation 1.6s";
        partners_container.style.marginLeft = "12.5%";
        rectangle_green_div.style.animation = "rectangle-green-div_animation 1s";
        rectangle_green_div.style.left = "0px";
    } else if (window.scrollY > 1900 && window.scrollY < 2300) {
        projects_container.style.animation = "div_animation 1.6s";
        projects_container.style.marginLeft = "12.5%";
        rectangle_black_div.style.animation = "rectangle-black-div_animation 1s";
        rectangle_black_div.style.right = "0px";
    }
};