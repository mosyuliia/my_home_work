let div = document.createElement('div');
let h1 = document.createElement('h1');
h1.innerText = 'Hello! I am tag from JS';

function setStyle(el, styles){
    for(let prop in styles)
        el.style[prop] = styles[prop];
}

setStyle(h1, {
    fontSize:'50px',
    color:'red',
    position:'fixed',
    left:'200px',
    top:'100px',
    backgroundColor:'yellow'
});

setStyle(div, {
    padding:'50px',
    backgroundColor:'gray',
    width:'400px',
    height:'200px'
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

/*Саша изменил эту часть в 21:50*/
/*h1.onclick = function(){
    chTitle('Other text');
}*/


/*сделать переключение при клике туда и обратно*/
h1.onclick = function(){
    if(flag){
        chTitle('Other text');
    }else{
        chTitle('Hello! I am tag from JS');
    }
    flag = !flag;
}

let p = document.createElement('p');
p.innerText = 'Lorem ipsum dolor';

div.appendChild(h1);
div.appendChild(p);
div.classList.add('foo');/*добавить класс*/
console.log(document.getElementsByClassName("foo"));/*выводим в консоль. чтобы посм класс добавился или нет*/
document.body.appendChild(div);/*добавляем в боди*/

function chTitle(t){
    h1.innerText = t;
}