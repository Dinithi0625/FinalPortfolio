const menu_button = document.querySelector("#menu_button");
const close_button = document.querySelector("#close_button");

menu_button.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
});

close_button.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});
