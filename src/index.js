"use strict";

//Create form
const pageBody = document.body;

const pageArticle = document.createElement("Article");

pageBody.append(pageArticle);
pageArticle.classList.add("formWrapper");

const pageForm = document.createElement("form");
pageArticle.append(pageForm);
pageForm.classList.add("form");

const sectionHeader = document.createElement("section");
const sectionText = sectionHeader.cloneNode();
const inputBth = document.createElement("input");

pageForm.append(sectionHeader, sectionText, inputBth);

//sectionHeader
sectionHeader.classList.add("formHeader");

const h1 = document.createElement("h1");
const pHead = document.createElement("p");

h1.textContent = "Create an account";
pHead.classList.add("formInfo");
pHead.textContent = "We always keep your name and email address private.";

sectionHeader.append(h1, pHead);

//sectionInputText
sectionText.classList.add("inputTextWrapper");

const inputName = document.createElement("input");
const inputEmail = inputName.cloneNode();

inputName.setAttribute("type", "text");
const inputLastName = inputName.cloneNode();
const inputNickName = inputName.cloneNode();
inputName.setAttribute("placeholder", "First Name");
inputName.setAttribute("name", "firstName");
inputLastName.setAttribute("placeholder", "Last Name");
inputLastName.setAttribute("name", "lastName");
inputNickName.setAttribute("placeholder", "Nick Name");
inputNickName.setAttribute("name", "nickName");

inputEmail.setAttribute("type", "email");
inputEmail.setAttribute("placeholder", "Email Address");
inputEmail.setAttribute("name", "email");

sectionText.append(inputName, inputLastName, inputNickName, inputEmail);

//inputBth
inputBth.classList.add("sumbitBtn");
inputBth.setAttribute("type", "submit");
inputBth.setAttribute("value", "Create account");

// Submit event

function createLocalPerson(e) {
  e.preventDefault();
  const inputs = [...document.querySelectorAll(".inputTextWrapper > input")];
  const person = new Person(...inputs);
  inputs.forEach((i) => {
    if (i.name === "lastName") {
      addPersonToLocalStorage(i.value, person);
      clearInputs(inputs);
    }
  });
}

class Person {
  constructor(...inputs) {
    inputs.forEach((i) => {
      this[i.name] = i.value; //можна було б збирати по placeholder, але через name надійніше
    });
  }
}

function addPersonToLocalStorage(lastName, person) {
  lastName = lastName || "someGuy";
  if (localStorage.getItem(lastName)) {
    throw new Error("we have this guy already");
  }
  localStorage.setItem(
    lastName,
    JSON.stringify(
      person
      //   (key, value) => {
      //   return key === "email" ? "" : value;
      // }
    )
    // 2
  );
}

function clearInputs(inputs) {
  inputs.forEach((i) => {
    i.value = "";
  });
}

inputBth.addEventListener("click", createLocalPerson);
