

const itemCo = document.querySelectorAll(".ac-all");
const itemCo2 = document.querySelectorAll(".ac-all2");

const it = document.querySelector(".items");
it.firstElementChild.addEventListener("click", function (e) {
    it.lastElementChild.style.background = "#303030";
    it.firstElementChild.style.background = "#BCFE2F";
    itemCo.forEach(function (item, index, array) {
        item.classList.add("ac");
    });
    itemCo2.forEach(function (item, index, array) {
        item.classList.remove("ac");
    });
});
it.lastElementChild.addEventListener("click", function (e) {
    it.lastElementChild.style.background = "#BCFE2F";
    it.firstElementChild.style.background = "#303030";
    itemCo.forEach(function (item, index, array) {
        item.classList.remove("ac");
    });
    itemCo2.forEach(function (item, index, array) {
        item.classList.add("ac");
    });
});



const nav = document.querySelector("#nav");
const menu = document.querySelector("#menu");
const line = document.querySelector(".line2");
console.log(menu);
menu.addEventListener("click", function name(e) {
    nav.firstElementChild.classList.toggle("new")
    nav.lastElementChild.classList.toggle("new")
    line.classList.toggle("line-active")
    menu.firstElementChild.classList.toggle("line-active3")
    menu.lastElementChild.classList.toggle("line-active2")
})


