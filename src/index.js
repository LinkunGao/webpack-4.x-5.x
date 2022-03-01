// import $ from "jquery";
// import "./css/style.css";
// import a from "./css/icon/Pikachu-music.png";
// // import App from "./components/App.vue";

// $(function () {
//   $("li:odd").css("backgroundColor", "pink");
//   $("li:even").css("backgroundColor", "lightblue");
// });

// const div = document.querySelector("#box1");
// const img = document.createElement("img");
// img.src = a;
// !!div && div.appendChild(img);

// class Person {
//   static info = "aaa";
// }

// function plus(a, b) {
//   console.log(a + b);
// }

// export default { plus, Person };
import "./css/mystyle.css";
import * as Copper from "copper3d";
const container = document.querySelector("#container_root");
const numberOfScene = 3;
const allScenes = new Copper.Scenes(container, numberOfScene);

const scene1 = allScenes.getScene(0);
const scene2 = allScenes.getScene(1);
const scene3 = allScenes.getScene(2);

Copper.createTestMesh(scene1);
Copper.createTestMesh(scene2);
Copper.createTestMesh(scene3);

allScenes.animate();
