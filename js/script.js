{

    const welcomeMessage = () => console.log("Łapa!");

    const toggleBackground = (changeBackgroundButton) => {
        const container = document.querySelector(".js-container");

        container.classList.toggle("container--lightBackground");
        changeBackgroundButton.innerText = container.classList.contains("container--lightBackground") ? "Zmien tło na białe" : "Zmień tło na szare";
    };

    const removePhoto = () => {
        const photoRajan = document.querySelector(".js-photoRajan");
        photoRajan.remove();
    };

    const init = () => {
        welcomeMessage();

        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        changeBackgroundButton.addEventListener("click", toggleBackground);

        const hideImgButton = document.querySelector(".js-hideImg");
        hideImgButton.addEventListener("click", removePhoto);
    };

    init();
}