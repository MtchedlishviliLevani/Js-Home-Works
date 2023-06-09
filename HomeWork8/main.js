const header = document.createElement("header");
document.body.appendChild(header);
const nav = document.createElement("nav");
header.appendChild(nav);
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

// დავალება 1

const icon = document.createElement("img");
icon.src = "./dark-mode.png";
nav.appendChild(icon);
icon.style.cursor = "pointer";
icon.setAttribute("class", "dark");
const icon2 = document.createElement("img");
icon2.src = "./moon.png";
nav.appendChild(icon2);
icon2.setAttribute("class", "light");

icon2.classList.add("hidden");

icon.addEventListener("click", () => {
  document.body.classList.add("darkmode");
  header.classList.add("darkmodeheader");
  ul.classList.add("darkmodeheader");
  icon.classList.add("hidden");
  icon2.classList.remove("hidden");
});

icon2.addEventListener("click", () => {
  document.body.classList.remove("darkmode");
  header.classList.remove("darkmodeheader");
  ul.classList.remove("darkmodeheader");
  icon2.classList.add("hidden");
  icon.classList.remove("hidden");
});

// დავალება 2
