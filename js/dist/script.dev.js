"use strict";

var right = document.querySelector(".right");
var left = document.querySelector(".left");
var container = document.querySelector('.container');
var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");
left.addEventListener('mouseenter', function () {
  return container.classList.add('hover-left');
});
left.addEventListener('mouseleave', function () {
  return container.classList.remove('hover-left');
});
right.addEventListener('mouseenter', function () {
  return container.classList.add('hover-right');
});
right.addEventListener('mouseleave', function () {
  return container.classList.remove('hover-right');
});
btn.addEventListener('click', function () {
  alert("Compra Realizada");
});
btn2.addEventListener('click', function () {
  alert("Compra Realizada");
});