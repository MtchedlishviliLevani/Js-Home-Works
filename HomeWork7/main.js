const nav = document.createElement("nav");
document.body.appendChild(nav);
const ul = document.createElement("ul");
nav.appendChild(ul);
const burger = document.createElement("div");
burger.className = "burger";
nav.appendChild(burger);

for (let i = 0; i < 3; i++) {
  const spans = document.createElement("span");
  burger.appendChild(spans);
}

for (let i = 0; i < 4; i++) {
  const li = document.createElement("li");
  ul.appendChild(li);
  const anchor = document.createElement("a");
  li.appendChild(anchor);

  const pages = ["Home", "Service", "About", "Contact"];
  anchor.textContent = pages[i];
  anchor.setAttribute("href", "#");
}

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});
