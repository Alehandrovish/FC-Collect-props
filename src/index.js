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
const sectionRadio = sectionHeader.cloneNode();
const sectionCheckBox = sectionHeader.cloneNode();
const inputBth = document.createElement("input");

pageForm.append(
  sectionHeader,
  sectionText,
  sectionRadio,
  sectionCheckBox,
  inputBth
);

//sectionHeader
sectionHeader.classList.add("formHeader");

const h1 = document.createElement("h1");
const pHead = document.createElement("p");

h1.textContent = "Create an account";
pHead.classList.add("formInfo");
pHead.textContent = "We always keep your name and email address private.";

sectionHeader.append(h1, pHead);

//sectionText
sectionText.classList.add("inputTextWrapper");

const inputName = document.createElement("input");
const inputEmail = inputName.cloneNode();
const inputPassword = inputName.cloneNode();

inputName.setAttribute("type", "text");
const inputLastName = inputName.cloneNode();
const inputDisplayName = inputName.cloneNode();
inputName.setAttribute("placeholder", "First Name");
inputLastName.setAttribute("placeholder", "Last Name");
inputDisplayName.setAttribute("placeholder", "Nick Name");

inputEmail.setAttribute("type", "email");
inputEmail.setAttribute("placeholder", "Email Address");

sectionText.append(inputName, inputLastName, inputDisplayName, inputEmail);

//inputBth
inputBth.classList.add("sumbitBtn");
inputBth.setAttribute("type", "submit");
inputBth.setAttribute("value", "Create account");

// Submit event

const submitBtn = document.querySelector(".sumbitBtn");

function createLocalPerson(e) {
  e.preventDefault();
  const [firstName, lastName, nickName, email] = document.querySelectorAll(
    ".inputTextWrapper > input"
  );
  const person = new Person(
    firstName.value,
    lastName.value,
    nickName.value,
    email.value
  );
  addPersonToLocalStorage(lastName.value, person);
}

function addPersonToLocalStorage(lastName, person) {
  lastName = lastName || "someGuy";
  if (localStorage.getItem(lastName)) {
    throw new Error("we have this guy already");
  }
  localStorage.setItem(lastName, JSON.stringify(person));
}

submitBtn.onclick = createLocalPerson;

class Person {
  constructor(firstName, lastName, nickName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickName = nickName;
    this.email = email;
  }
}
