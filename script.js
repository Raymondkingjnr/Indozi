"use strict";
const BtnLogin = document.querySelector(".login__btn");
const BtnSignin = document.querySelector(".signup__btn");
const LogForm = document.querySelector(".log__form");
const CreateAcct = document.querySelector(".create-acct");
const Overlay = document.querySelector(".overlay");
const signUp = document.querySelector(".btn_sign-in");
const login = document.querySelector(".btn__login");
const btnHam = document.querySelector(".hidden-hambuger");
const HamMenu = document.querySelector(".hambuger-menu");
const head = document.querySelector(".header");

const openLogIn = function () {
  LogForm.classList.remove("hidden");
  Overlay.classList.remove("hidden");
};
BtnLogin.addEventListener("click", openLogIn);

// const RemoveHam = function () {
//   HamMenu.classList.add("btn-ham");
// };
// head.addEventListener("click", RemoveHam);

const openHam = function () {
  HamMenu.classList.remove("btn-ham");
};
btnHam.addEventListener("click", openHam);

const createForm = function () {
  CreateAcct.classList.remove("hidden2");
  Overlay.classList.remove("hidden");
};
BtnSignin.addEventListener("click", createForm);

const closeTag = function () {
  LogForm.classList.add("hidden");
  Overlay.classList.add("hidden");
  CreateAcct.classList.add("hidden2");
};

Overlay.addEventListener("click", closeTag);
login.addEventListener("click", closeTag);
signUp.addEventListener("click", closeTag);
