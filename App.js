const hamburger = document.querySelector("#hanburger");
const menu = document.querySelector("#menu");
const body = document.querySelector("body");
const moon = document.querySelector("#moon");
const hLinks = document.querySelectorAll("#hLink");
const date = document.querySelector("#date")

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("bg-white");
});

hLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white");
  });
});

moon.addEventListener("click", () => {
  body.classList.toggle("dark");
});

const year = new Date().getFullYear();

date.append(year);

window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Success!");
    })
  });
});