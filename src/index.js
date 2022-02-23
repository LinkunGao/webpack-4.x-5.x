import $ from "jquery";
import "./css/style.css";
import a from "./css/icon/Pikachu-music.png";

$(function () {
  $("li:odd").css("backgroundColor", "pink");
  $("li:even").css("backgroundColor", "lightblue");
});

const div = document.querySelector("#box1");
const img = document.createElement("img");
img.src = a;
!!div && div.appendChild(img);

class Person {
  static info = "aaa";
}

console.log(Person.info);
