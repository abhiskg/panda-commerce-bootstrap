const h2 = document.querySelectorAll("h2") as NodeListOf<HTMLHeadingElement>;
h2.forEach((heading) => {
  heading.style.color = "#FFA500";
});

const backPack = document.querySelector("#backpack") as HTMLElement;
backPack.addEventListener("mouseover", () => {
  backPack.style.backgroundColor = "tomato";
});
backPack.addEventListener("mouseout", () => {
  backPack.style.backgroundColor = "white";
});

// Submit button
const emailField = document.querySelector("#email-field") as HTMLInputElement;
emailField.addEventListener("keyup", (e) => {
  const submitBtn = document.querySelector("#submit-btn") as HTMLButtonElement;
  const inputData = (e.target as HTMLInputElement).value;
  if (inputData.toLowerCase() === "email") {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", "");
  }
});

// Background color change
const subscribe = document.querySelector("#subscribe") as HTMLElement;
subscribe.addEventListener("dblclick", () => {
  subscribe.classList.remove("bg-secondary");
  subscribe.style.backgroundColor = "orange";
});
