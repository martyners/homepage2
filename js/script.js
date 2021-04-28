console.log("Łapa!");

let buttonChangeBackground = document.querySelector(".js-buttonChangeBackground");
let container = document.querySelector(".js-container");
let buttonHideImg = document.querySelector(".js-hideImg");
let photoRajan = document.querySelector(".js-photoRajan");


buttonHideImg.addEventListener("click", () => {
    photoRajan.remove();
})


buttonChangeBackground.addEventListener("click", () => {
    container.classList.toggle("container-background");
    buttonChangeBackground.innerText = container.classList.contains("container-background") ? "Zmien tło na białe" : "Zmień tło na szare";
});