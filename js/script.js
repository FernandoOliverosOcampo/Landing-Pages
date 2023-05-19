const right = document.querySelector(".right");
const left = document.querySelector(".left");
const container = document.querySelector('.container');
const btn = document.getElementById("btn")
const btn2 = document.getElementById("btn2")


left.addEventListener('mouseenter', ()=> container.classList.add('hover-left'))
left.addEventListener('mouseleave', ()=> container.classList.remove('hover-left'))
right.addEventListener('mouseenter', ()=> container.classList.add('hover-right'))
right.addEventListener('mouseleave', ()=> container.classList.remove('hover-right'))

btn.addEventListener('click', ()=>{
    alert("Compra Realizada")
} )
btn2.addEventListener('click', ()=>{
    alert("Compra Realizada")
} )
