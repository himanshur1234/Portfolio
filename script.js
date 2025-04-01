document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        offset: 100, 
        duration: 1000, 
        once: true 
    });
});

function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

var typed = new Typed("#typing-text", {
    strings: ["Java Developer", "Spring-Boot Enthusiast", "Learner"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 800,
    loop: true
});

let lastScrollTop = 0;
const logo = document.querySelector(".logo");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 50) {  
        // If scrolled more than 50px, hide logo completely
        logo.style.opacity = "0";
        logo.style.pointerEvents = "none"; 
    } else {  
        // If back at the top, show logo again
        logo.style.opacity = "1";
        logo.style.pointerEvents = "auto";
    }

    lastScrollTop = scrollTop;
});

document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault(); 

    let formData = new FormData(this);

    let response = await fetch(this.action, {
        method: "POST",
        body: formData
    });

    let result = await response.json();

    if (result.success) {
        let successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block"; 

        this.reset(); 

        setTimeout(() => {
            successMessage.style.display = "none"; 
        }, 3000);
    }
});
