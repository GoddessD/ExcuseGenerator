/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let randomNumber = Math.random() * 10;
  document.querySelector("#theexcuse").innerHTML = randomNumber;
  console.log("Hello Rigo from the console! " + randomNumber);
};

let generateEXCUSE = () => {
  let who = - [ 'She', 'He'. 'They'];
  let action = ['drove','played', 'moved', 'worked on'];
  let what = ['']
  let when = ['']


  return " I finished all my coursework by myself";
};
