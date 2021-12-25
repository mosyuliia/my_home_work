"use strict";

var div = document.createElement('div');
var h1 = document.createElement('h1');
h1.innerText = 'Hello! I am tag from JS';

function setStyle(el, styles) {
  for (var prop in styles) {
    el.style[prop] = styles[prop];
  }
}

setStyle(h1, {
  fontSize: '50px',
  color: 'red',
  position: 'fixed',
  left: '200px',
  top: '100px',
  backgroundColor: 'yellow'
});
setStyle(div, {
  padding: '50px',
  backgroundColor: 'gray',
  width: '400px',
  height: '200px'
});
/*Саша убрал эту часть кода в процессе*/

/*h1.setAttribute('style',`
color:red;
background-color:yellow`);

h1.style.fontSize = '60px';
console.log(h1.style);

let h1_css = {
    fontSize:'50px',
    color:'red',
    position:'fixed',
    left:'200px',
    top:'100px'
};

for(let prop in h1_css){
    h1.style[prop] = h1_css[prop];
}*/

h1.onclick = function () {
  chTitle('Other text');
};

div.appendChild(h1);
document.body.appendChild(div);

function chTitle(t) {
  h1.innerText = t;
}