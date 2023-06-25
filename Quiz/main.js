// საჭიროა შევქმნათ აპლიკაცია რომელიც `Fetch User` ღილაკზე დაჭერით
// მოგცემს სასუალებას რომ წამოვიღოთ მომხმარებლის ინფორმაცია
// **https://randomuser.me/api** მოცემული მისამართიდან და მიღებული მონაცემები
//  დავხატოთ ინტერფეისში.
// ღილაკის დაჭერის შემდეგ უნდა იცვლებოდეს ასევე ინფორმაცია.

// დამატებითი დავალება
// აპლიკაციაში უნდა მქონდეს საშუალება ავირჩიო რამდენი მომხმარებლის ინფორმაცია წამოვიღო.

// უნდა შემეძლოს წამოვიღო მხოლოდ male ან female ან ორივე ერთად.

// წინასწარ მოვნიშნო რა მონაცემების წამოღება მინდა და შემდეგ წამოვიღო ყველა საჭირო მონაცემი
// მაგალითად წამოვიღო მხოლოდ მომხმარებლის სახელი, საცხოვრებელი ადგილი, იმეილი,ტელეფონის ნომერი და სურათი

// ინტერფეისში გვჭირდება რომ გამოვიტანოთ

// - ფოტო: `picture.medium` *როგორც სურათი*
// - ელ ფოსტა: `email` *როგორც ტექსტი*
// - ქალაქი: `location.city` *როგორც ტექსტი*
// - სრული სახელი: `name` *როგორც ტექსტი*
//  🔔 სახელი შეიცვას სამ მნიშნველობას საჭიროა მოცემული სამი სტრიგნი გადვაბათ ერთმანეთზე

// მაგ:

// ```json
// {
//   "name": {
//     "title": "Monsieur",
//     "first": "Josef",
//     "last": "Garnier"
//   }
// }
// ```
// უნდა გამოიტანოთ ინტერფეისში როგორც

// `Monsieur Josef Garnier`

// 🎨 ინტერფეისის სტილი შეგიძლიათ შექმნათ თქვენი გემოვნებით

let url2;

function determineUrl() {
  const dropdown = document.getElementById("dropDown");

  dropdown.addEventListener("change", () => {
    const selectedGender = dropdown.value;

    if (selectedGender === "female") {
      url2 = fetch(`https://randomuser.me/api/?gender=female`);
    } else if (selectedGender === "male") {
      url2 = fetch(`https://randomuser.me/api/?gender=male`);
    } else {
      url2 = fetch(`https://randomuser.me/api/?gender=`);
    }

    fetchData1();
  });
}

//gender

function fetchData1() {
  url2
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error");
      }
      return res.json();
    })
    .then((data) => {
      // console.log(data.results);
      usersData(data.results);
    })
    .catch((error) => {
      console.log(error);
      document.body.textContent = error;
    })
    .finally(() => {
      closeLoader();
    });
}

// fetch random 10 users inforaation

function fetchData() {
  for (let i = 0; i < 10; i++) {
    const url = fetch("https://randomuser.me/api/");
    url
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error");
        }
        return res.json();
      })
      .then((data) => {
        usersData(data.results);
      })
      .catch((error) => {
        console.log(error);
        document.body.textContent = error;
      })
      .finally(() => {
        closeLoader();
      });
  }
}

function usersData(info) {
  const container = document.querySelector(".container");

  info.forEach((e) => {
    const wrapper = document.createElement("div");
    container.appendChild(wrapper);
    wrapper.setAttribute("class", "wrapper");
    const photo = document.createElement("img");
    wrapper.appendChild(photo);
    photo.src = e.picture.large;
    const fullname = document.createElement("h1");
    wrapper.appendChild(fullname);
    fullname.textContent = `${e.name.title} ${e.name.first} ${e.name.last}`;
    const email = document.createElement("h2");
    wrapper.appendChild(email);
    email.textContent = e.email;
    const city = document.createElement("h2");
    wrapper.appendChild(city);
    city.textContent = e.location.city;
  });
}
determineUrl();

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  fetchData();
});

// loader

const loader = document.querySelector(".loader");
function showLoader() {
  loader.classList.add("show");
}
function closeLoader() {
  loader.classList.remove("show");
}
