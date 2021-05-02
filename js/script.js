{

    const welcomeMessage = () => console.log("Łapa!");

    const toggleBackground = () => {
        const container = document.querySelector(".js-container");

        container.classList.toggle("container-background");
        buttonChangeBackground.innerText = container.classList.contains("container-background") ? "Zmien tło na białe" : "Zmień tło na szare";
    };

    const init = () => {
        welcomeMessage();

        const buttonChangeBackground = document.querySelector(".js-buttonChangeBackground");
        buttonChangeBackground.addEventListener("click", toggleBackground);

        const buttonHideImg = document.querySelector(".js-hideImg");

        buttonHideImg.addEventListener("click", () => {
            const photoRajan = document.querySelector(".js-photoRajan");
            photoRajan.remove();
        });


    };

    init();
}