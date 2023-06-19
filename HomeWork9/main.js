// https://jsonplaceholder.typicode.com/users წამოიღეთ user-ებზე ინცორმაცია მოცემული API დან
// და შექმენით ინტერფეისი.
// კარგი იქნება თუ ერორსაც გაითვალისწინებთ და ააწყობთ flow ერორ ჰენდლინგისთვის.

function fetchData() {
  const url = fetch("https://jsonplaceholder.typicode.com/users");
  url
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network has a problem");
      }
    })
    .then((data1) => {
      renderUser(data1);
    })

    .catch((erorr) => {
      console.log(`there is something: ${erorr}`);
    });
}

function renderUser(info) {
  const wrapper = document.querySelector(".wrapper");
  info.forEach((e) => {
    const name = document.createElement("h1");
    const addres = document.createElement("h3");
    const userName = document.createElement("h3");
    const email = document.createElement("h3");
    const phone = document.createElement("h3");
    const website = document.createElement("h3");
    const id = document.createElement("h3");
    wrapper.appendChild(name);
    wrapper.appendChild(addres);
    wrapper.appendChild(userName);
    wrapper.appendChild(email);
    wrapper.appendChild(phone);
    wrapper.appendChild(website);
    wrapper.appendChild(id);
    name.textContent = e.name;
    addres.textContent =
      e.address.city + " " + e.address.street + " " + e.address.suite;
    userName.textContent = e.userName;
    email.textContent = e.email;
    phone.textContent = e.phone;
    website.textContent = e.website;
    id.textContent = e.id;
  });
  //   console.log(info);
}

fetchData();
