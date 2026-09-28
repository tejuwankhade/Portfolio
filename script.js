```javascript
/* =========================================
   HIRE ME BUTTON
========================================= */

const hireBtn = document.getElementById("hireBtn");

if (hireBtn) {

    hireBtn.addEventListener("click", function () {

        const contactSection = document.getElementById("contact");

        if (contactSection) {

            contactSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


/* =========================================
   SCROLL TO TOP BUTTON
========================================= */

const topButton = document.getElementById("topBtn");


window.addEventListener("scroll", function () {

    if (!topButton) return;

    if (window.scrollY > 300) {

        topButton.style.display = "flex";

    } else {

        topButton.style.display = "none";

    }

});


/* =========================================
   SCROLL TO TOP
========================================= */

if (topButton) {

    topButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.querySelector("#contact form");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const nameInput =
            contactForm.querySelector('input[type="text"]');

        const emailInput =
            contactForm.querySelector('input[type="email"]');

        const messageInput =
            contactForm.querySelector("textarea");


        const name = nameInput.value.trim();

        const email = emailInput.value.trim();

        const message = messageInput.value.trim();


        /* Check empty fields */

        if (!name || !email || !message) {

            alert("Please fill in all fields.");

            return;

        }


        /* Simple email validation */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;

        }


        /* Success message */

        alert(
            "Thank you, " +
            name +
            "! Your message has been received."
        );


        /* Clear form */

        contactForm.reset();

    });

}


/* =========================================
   PAGE LOAD
========================================= */

window.addEventListener("load", function () {

    console.log("Tejal Wankhade Portfolio Loaded Successfully.");

});
```
