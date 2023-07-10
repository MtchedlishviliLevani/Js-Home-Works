// დაამატეთ ვალიდაციები ინფუთებს რომლებსაც არ აქვთ,
//  სახელზე დამატეთ რომ ჩაწერილი იყოს მხოლოდ john ან jane ქეის სენსითივი არ უნდა იყოს.
// ტელეფონზე დაამატეთ რომ იყოს ქართული ნომერი, ანუ იწყებოდეს +995 და თვითონ ნომერი არ იქყოს 9 სიმბოლოზე მეტი მაგალითად (+995599909090)
// პაროლზე თვითონ ფუნქციაში მიწერია როგორი უნდა იყოს პაროლი.

const APP = {
  init() {
    APP.addListeners();
  },
  addListeners() {
    let form = document.sampleForm;
    let fullname = document.getElementById("fullname");
    let cell = document.getElementById("cell");
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    fullname.addEventListener("input", APP.testName);
    cell.addEventListener("input", APP.formatPhone);
    email.addEventListener("change", APP.testEmail);
    pass.addEventListener("input", APP.checkPasswordRequirements);

    //what to do if something went wrong during validation
    fullname.addEventListener("invalid", APP.fail);
    email.addEventListener("invalid", APP.fail);
    cell.addEventListener("invalid", APP.fail);
    pass.addEventListener("invalid", APP.fail);

    //when the form gets submitted
    form.addEventListener("submit", APP.validate);
  },
  validate(ev) {
    ev.preventDefault();
    let form = ev.target;
    let email = document.getElementById("email");
    let fullname = document.getElementById("fullname");
    let cell = document.getElementById("cell");
    let pass = document.getElementById("pass");
    console.log("willValidate", email.willValidate);
    //run validation on the whole form when submitting...

    // form controls have the following
    // invalid event
    console.log(email.validity);
    console.log(fullname.validity);
    console.log(cell.validity);
    console.log(pass.validity);
  },
  testName(ev) {
    let fullname = ev.target;
    fullname.setCustomValidity("");

    // Define the regular expression pattern for 'john' or 'jane'
    let pattern = /^(john|jane)$/i;

    // Check if the input value matches the pattern
    if (!pattern.test(fullname.value) || fullname.value.trim() === "") {
      fullname.setCustomValidity("Please enter 'John' or 'Jane'.");
    }
  },

  testEmail(ev) {
    let email = ev.target;
    console.log("willValidate | ", email.willValidate);
    console.log("validity object ", email.validity);

    email.setCustomValidity(""); //clear old message
    //built-in test for error based on type, pattern, and other attrs
    let currently = email.checkValidity();
    console.log("currently", currently);
    console.log("validation message | ", email.validationMessage);

    if (currently) {
      let emReg = new RegExp("@gmail.com$", "i");
      if (emReg.test(email.value) === false) {
        //not a gmail address
        console.log("NOT a gmail address");
        email.setCustomValidity("NOT a gmail address.");
        console.log(email.validity);
        email.reportValidity(); //show the custom message, trigger invalid event
      }
    }
  },
  formatPhone(ev) {
    let cell = ev.target;
    cell.setCustomValidity("");

    // Add Georgian phone number format validation
    let pattern = /^\+995\s?\d{3}\s?\d{2}\s?\d{2}\s?\d{2}$/;
    if (!pattern.test(cell.value) && cell.value.trim()) {
      cell.setCustomValidity(
        "Please enter a valid Georgian phone number (e.g., +995 599 90 90 90)."
      );
    }
  },
  checkPasswordRequirements(input) {
    //check password requirements as user types
    // uppercase, lowercase, numeric, length >= 10
    // Allowed: [! @ # $ % ^ & * ( ) . , ? ; : ~]
    let pass = input.target;
    pass.setCustomValidity("");
    let pattern =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*().,?;:~]).{10,}$/;
    if (!pattern.test(pass.value) && pass.value.trim()) {
      pass.setCustomValidity(
        "At least one uppercase,lowercase,numeric, allowed symbol: [! @ # $ % ^ & * ( ) . , ? ; : ~],  length more than 10 symbol"
      );
    }
  },

  fail(ev) {
    let field = ev.target;
    // the invalid event fired
    console.log("INVALID");
    //standard display change for any element
    switch (field.id) {
      case "email":
        let span = field.parentElement.querySelector(".errMessage");
        span.textContent = "Must be a valid Gmail address.";
        break;
      case "fullname":
        let fullNamespan = field.parentElement.querySelector(".errMessage");
        fullNamespan.textContent = "Please Write the allowed names";
        break;
      case "cell":
        let cellspan = field.parentElement.querySelector(".errMessage");
        cellspan.textContent = "Follow the cellphone requirments";
        break;
      case "pass":
        let pass_span = field.parentElement.querySelector(".errMessage");
        pass_span.textContent = "Must be Valid Password";
        break;
    }
  },
};
document.addEventListener("DOMContentLoaded", APP.init);
