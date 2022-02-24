import $ from "jquery";
import "./css/style.css";
import a from "./css/icon/Pikachu-music.png";
// import App from "./components/App.vue";

$(function () {
  $("li:odd").css("backgroundColor", "pink");
  $("li:even").css("backgroundColor", "lightblue");
});

const div = document.querySelector("#box1");
const img = document.createElement("img");
img.src = a;
!!div && div.appendChild(img);

export class Person {
  static info = "aaa";
}

console.log(Person.info);

function plus(a, b) {
  console.log(a + b);
}

export { plus, Person };
