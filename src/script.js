const body= document.querySelector('body');
const button= document.querySelector('button');
const color =['red', 'green','violet', 'black', 'yellow', 'pink', 'brown', 'white', 'orange'];

body.style.backgroundColor = 'white';
button.addEventListener('click', function(){
const colorIndex = parseInt(Math.random()*color.length);
body.style.backgroundColor=color[colorIndex];
})





