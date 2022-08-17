"use strict";
const h2 = document.querySelectorAll("h2");
h2.forEach((heading) => {
    heading.style.color = "#FFA500";
});
const backPack = document.querySelector("#backpack");
backPack.addEventListener("mouseover", () => {
    backPack.style.backgroundColor = "tomato";
});
backPack.addEventListener("mouseout", () => {
    backPack.style.backgroundColor = "white";
});
// Submit button
const emailField = document.querySelector("#email-field");
emailField.addEventListener("keyup", (e) => {
    const submitBtn = document.querySelector("#submit-btn");
    const inputData = e.target.value;
    if (inputData.toLowerCase() === "email") {
        submitBtn.removeAttribute("disabled");
    }
    else {
        submitBtn.setAttribute("disabled", "");
    }
});
// Background color change
