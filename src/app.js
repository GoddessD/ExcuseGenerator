/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};
let getRandom = limit => {
  return Math.floor(Math.random() * limit);
};
let generateEXCUSE = () => {
  let who = ["She", "He", "They"];
  let action = ["broke", "lost", "moved", "ate"];
  let what = ["the keys", "the computer", "the phone", "the homework"];
  let when = [" this morning", "this afternoon", "last night", "yesterday"];

  return (
    who[getRandom(who.length)] +
    " " +
    action[getRandom(action.length)] +
    " " +
    what[getRandom(what.length)] +
    " " +
    when[getRandom(when.length)]
  );
};
document.querySelector("#theexcuse").innerHTML = generateEXCUSE();
