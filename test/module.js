// 当前文件模块为 modoule.js
// 定义私有成员 a 和 c
let a = 10;
let c = 20;
// 外界访问不到变量 d， 因为没有将它暴露出去
let d = 30;
function show() {
  return a + c + d;
}
// 将本模块中的私有成员暴露出去，供其它模块使用
export default {
  a,
  c,
  show,
};
