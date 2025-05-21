const menu_button = document.querySelector("#menu_button");
const close_button = document.querySelector("#close_button");

menu_button.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
});

close_button.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
};

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload

    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const message = this.querySelector('textarea[name="message"]').value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // API call or Firebase save logic goes here
    alert("Your message has been sent!");
});
